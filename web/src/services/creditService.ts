/** Credit/Star management service for Component Task. */
const STORAGE_KEY = "component-task-stars";
const TRANSACTION_STORAGE_KEY = "component-task-star-transactions";
const INITIAL_BALANCE = 25;
const MAX_TRANSACTIONS = 20;

export type StarTransactionType = "reward" | "spend";
export type StarTransaction = {
  id: string; amount: number; balanceAfter: number;
  type: StarTransactionType; reason: string; createdAt: string;
};

function saveTransaction(transaction: StarTransaction): void {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    const history = Array.isArray(parsed) ? parsed : [];
    localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify([transaction, ...history].slice(0, MAX_TRANSACTIONS)));
  } catch {}
}

export function getStarTransactions(): StarTransaction[] {
  try {
    const saved = localStorage.getItem(TRANSACTION_STORAGE_KEY);
    if (!saved) return [];
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is StarTransaction => {
      if (!item || typeof item !== "object") return false;
      const t = item as Partial<StarTransaction>;
      return typeof t.id === "string" && typeof t.amount === "number" && typeof t.balanceAfter === "number" && (t.type === "reward" || t.type === "spend") && typeof t.reason === "string" && typeof t.createdAt === "string";
    }).slice(0, MAX_TRANSACTIONS);
  } catch { return []; }
}

function recordTransaction(amount: number, type: StarTransactionType, reason: string, balanceAfter: number): void {
  saveTransaction({ id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8), amount, type, reason, balanceAfter, createdAt: new Date().toISOString() });
}

export function getBalance(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return INITIAL_BALANCE;
    const parsed = parseInt(saved, 10);
    if (Number.isNaN(parsed) || parsed < 0) return INITIAL_BALANCE;
    return parsed;
  } catch { return INITIAL_BALANCE; }
}

export function setBalance(balance: number): void {
  if (balance < 0) return;
  try { localStorage.setItem(STORAGE_KEY, String(balance)); } catch {}
}

export function addStars(amount: number, reason = "Stars added"): number {
  if (amount <= 0) return getBalance();
  const newBalance = getBalance() + amount;
  setBalance(newBalance);
  recordTransaction(amount, "reward", reason, newBalance);
  return newBalance;
}

export function canSpend(amount: number): boolean {
  if (amount <= 0) return false;
  return getBalance() >= amount;
}

export function spendStars(amount: number, reason = "Stars spent"): boolean {
  if (amount <= 0) return false;
  const current = getBalance();
  if (current < amount) return false;
  const newBalance = current - amount;
  setBalance(newBalance);
  recordTransaction(-amount, "spend", reason, newBalance);
  return true;
}