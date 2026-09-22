/** Credit/Star management service for Component Task. */
const STORAGE_KEY = "component-task-stars";
const TRANSACTION_STORAGE_KEY = "component-task-star-transactions";
const INITIAL_BALANCE = 25;
const MAX_TRANSACTIONS = 20;

export type StarTransactionType = "reward" | "spend";
export type StarTransaction = {
  id: string;
  amount: number;
  balanceAfter: number;
  type: StarTransactionType;
  reason: string;
  createdAt: string;
};

function normalizeBalance(value: unknown, fallback: number): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return fallback;
  }
  return Math.max(0, Math.floor(value));
}

function parseStoredBalance(saved: string | null): number {
  if (saved === null) return INITIAL_BALANCE;
  const parsed = Number(saved);
  return normalizeBalance(parsed, INITIAL_BALANCE);
}

function isValidTransaction(item: unknown): item is StarTransaction {
  if (!item || typeof item !== "object") return false;
  const t = item as Partial<StarTransaction>;

  if (
    typeof t.id !== "string" ||
    !t.id ||
    typeof t.amount !== "number" ||
    !Number.isFinite(t.amount) ||
    typeof t.balanceAfter !== "number" ||
    !Number.isFinite(t.balanceAfter) ||
    t.balanceAfter < 0 ||
    !Number.isInteger(t.balanceAfter) ||
    (t.type !== "reward" && t.type !== "spend") ||
    typeof t.reason !== "string" ||
    !t.reason ||
    typeof t.createdAt !== "string"
  ) {
    return false;
  }

  if (t.type === "reward" && t.amount <= 0) return false;
  if (t.type === "spend" && t.amount >= 0) return false;

  return true;
}

function sanitizeTransactions(parsed: unknown): StarTransaction[] {
  if (!Array.isArray(parsed)) return [];

  const seenIds = new Set<string>();
  const valid: StarTransaction[] = [];

  for (const item of parsed) {
    if (!isValidTransaction(item)) continue;
    if (seenIds.has(item.id)) continue;

    seenIds.add(item.id);
    valid.push(item);
  }

  return valid.slice(0, MAX_TRANSACTIONS);
}

function readTransactionHistory(): StarTransaction[] {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    return sanitizeTransactions(parsed);
  } catch {
    return [];
  }
}

function writeTransactionHistory(history: StarTransaction[]): boolean {
  try {
    const sanitized = sanitizeTransactions(history);
    localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(sanitized));

    const stored = JSON.parse(
      localStorage.getItem(TRANSACTION_STORAGE_KEY) || "[]"
    );

    return JSON.stringify(sanitizeTransactions(stored)) === JSON.stringify(sanitized);
  } catch {
    return false;
  }
}

export function getStarTransactions(): StarTransaction[] {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);
    const sanitized = sanitizeTransactions(parsed);

    // Repair malformed/duplicate history in place so future reads stay clean.
    if (JSON.stringify(parsed) !== JSON.stringify(sanitized)) {
      try {
        localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(sanitized));
      } catch {}
    }

    return sanitized;
  } catch {
    return [];
  }
}

function createTransaction(
  amount: number,
  type: StarTransactionType,
  reason: string,
  balanceAfter: number
): StarTransaction {
  return {
    id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8),
    amount,
    type,
    reason,
    balanceAfter,
    createdAt: new Date().toISOString(),
  };
}

export function getBalance(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return parseStoredBalance(saved);
  } catch {
    return INITIAL_BALANCE;
  }
}

export function setBalance(balance: number): void {
  const safeBalance = normalizeBalance(balance, 0);
  try {
    localStorage.setItem(STORAGE_KEY, String(safeBalance));
  } catch {}
}

export function addStars(amount: number, reason = "Stars added"): number {
  const safeAmount = normalizeBalance(amount, 0);
  if (safeAmount <= 0) return getBalance();

  const current = getBalance();
  const newBalance = current + safeAmount;
  const transaction = createTransaction(
    safeAmount,
    "reward",
    reason,
    newBalance
  );
  const previousHistory = readTransactionHistory();
  const nextHistory = [transaction, ...previousHistory].slice(0, MAX_TRANSACTIONS);

  // Commit the history first. If it cannot be persisted, the balance is untouched.
  if (!writeTransactionHistory(nextHistory)) {
    return current;
  }

  try {
    localStorage.setItem(STORAGE_KEY, String(newBalance));
  } catch {
    // Roll the history back if the balance commit fails.
    writeTransactionHistory(previousHistory);
    return current;
  }

  // Verify the complete committed state. If verification fails, restore both parts.
  if (getBalance() !== newBalance) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
    writeTransactionHistory(previousHistory);
    return current;
  }

  const latest = getStarTransactions()[0];
  if (
    !latest ||
    latest.id !== transaction.id ||
    latest.amount !== safeAmount ||
    latest.balanceAfter !== newBalance ||
    latest.type !== "reward"
  ) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
    writeTransactionHistory(previousHistory);
    return current;
  }

  return newBalance;
}

export function canSpend(amount: number): boolean {
  const safeAmount = normalizeBalance(amount, 0);
  if (safeAmount <= 0) return false;
  return getBalance() >= safeAmount;
}

export function spendStars(amount: number, reason = "Stars spent"): boolean {
  const safeAmount = normalizeBalance(amount, 0);
  if (safeAmount <= 0) return false;

  const current = getBalance();
  if (current < safeAmount) return false;

  const newBalance = current - safeAmount;
  const transaction = createTransaction(
    -safeAmount,
    "spend",
    reason,
    newBalance
  );
  const previousHistory = readTransactionHistory();
  const nextHistory = [transaction, ...previousHistory].slice(0, MAX_TRANSACTIONS);

  // Commit the history first. If it cannot be persisted, the balance is untouched.
  if (!writeTransactionHistory(nextHistory)) {
    return false;
  }

  try {
    localStorage.setItem(STORAGE_KEY, String(newBalance));
  } catch {
    // Roll the history back if the balance commit fails.
    writeTransactionHistory(previousHistory);
    return false;
  }

  // Verify the complete committed state. If verification fails, restore both parts.
  if (getBalance() !== newBalance) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
    writeTransactionHistory(previousHistory);
    return false;
  }

  const latest = getStarTransactions()[0];
  if (
    !latest ||
    latest.id !== transaction.id ||
    latest.amount !== -safeAmount ||
    latest.balanceAfter !== newBalance ||
    latest.type !== "spend"
  ) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
    writeTransactionHistory(previousHistory);
    return false;
  }

  return true;
}
