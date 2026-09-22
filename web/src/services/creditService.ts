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

function saveTransaction(transaction: StarTransaction): boolean {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    const history = Array.isArray(parsed) ? parsed : [];
    const nextHistory = [transaction, ...history].slice(0, MAX_TRANSACTIONS);
    localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(nextHistory));

    const stored = JSON.parse(localStorage.getItem(TRANSACTION_STORAGE_KEY) || "[]");
    return Array.isArray(stored) && stored[0]?.id === transaction.id;
  } catch {
    return false;
  }
}

export function getStarTransactions(): StarTransaction[] {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    if (!saved) return [];
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item): item is StarTransaction => {
        if (!item || typeof item !== "object") return false;
        const t = item as Partial<StarTransaction>;
        return (
          typeof t.id === "string" &&
          typeof t.amount === "number" &&
          Number.isFinite(t.amount) &&
          typeof t.balanceAfter === "number" &&
          Number.isFinite(t.balanceAfter) &&
          t.balanceAfter >= 0 &&
          (t.type === "reward" || t.type === "spend") &&
          typeof t.reason === "string" &&
          typeof t.createdAt === "string"
        );
      })
      .slice(0, MAX_TRANSACTIONS);
  } catch {
    return [];
  }
}

function recordTransaction(
  amount: number,
  type: StarTransactionType,
  reason: string,
  balanceAfter: number
): boolean {
  return saveTransaction({
    id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8),
    amount,
    type,
    reason,
    balanceAfter,
    createdAt: new Date().toISOString(),
  });
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

  try {
    localStorage.setItem(STORAGE_KEY, String(newBalance));
  } catch {
    return current;
  }

  if (!recordTransaction(safeAmount, "reward", reason, newBalance)) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
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

  try {
    localStorage.setItem(STORAGE_KEY, String(newBalance));
  } catch {
    return false;
  }

  if (!recordTransaction(-safeAmount, "spend", reason, newBalance)) {
    try {
      localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
    return false;
  }

  return true;
}
