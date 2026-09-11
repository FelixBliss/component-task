/**
 * Credit/Star management service for Component Task.
 * Persists balance using localStorage.
 */

const STORAGE_KEY = "component-task-stars";
const INITIAL_BALANCE = 25;

/**
 * Get the current star balance from localStorage.
 * Returns INITIAL_BALANCE for new users or if no saved balance exists.
 */
export function getBalance(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) {
      return INITIAL_BALANCE;
    }
    const parsed = parseInt(saved, 10);
    if (Number.isNaN(parsed) || parsed < 0) {
      return INITIAL_BALANCE;
    }
    return parsed;
  } catch {
    return INITIAL_BALANCE;
  }
}

/**
 * Set the balance directly (used for initialization or reset).
 * Does not allow negative values.
 */
export function setBalance(balance: number): void {
  if (balance < 0) {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, String(balance));
  } catch {
    // Ignore storage errors.
  }
}

/**
 * Add stars to the current balance.
 * Rejects zero or negative amounts.
 * Returns the new balance.
 */
export function addStars(amount: number): number {
  if (amount <= 0) {
    return getBalance();
  }
  const current = getBalance();
  const newBalance = current + amount;
  setBalance(newBalance);
  return newBalance;
}

/**
 * Check if the user can spend the specified amount.
 * Returns false for zero or negative amounts.
 */
export function canSpend(amount: number): boolean {
  if (amount <= 0) {
    return false;
  }
  const current = getBalance();
  return current >= amount;
}

/**
 * Spend stars from the balance.
 * Returns true if successful, false if insufficient funds or invalid amount.
 * Does not modify balance if the transaction fails.
 */
export function spendStars(amount: number): boolean {
  if (amount <= 0) {
    return false;
  }
  const current = getBalance();
  if (current < amount) {
    return false;
  }
  setBalance(current - amount);
  return true;
}
