/**
 * Connectivity state management for PWA/web.
 * Uses browser's navigator.onLine and online/offline events.
 */

type ConnectivityState = {
  isOnline: boolean;
};

let currentState: ConnectivityState = {
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
};

const listeners: Set<(state: ConnectivityState) => void> = new Set();

/**
 * Get current connectivity state.
 */
export function getConnectivityState(): ConnectivityState {
  return { ...currentState };
}

/**
 * Check if device is currently online.
 */
export function isOnline(): boolean {
  if (typeof navigator === 'undefined') {
    return true;
  }
  return navigator.onLine;
}

/**
 * Subscribe to connectivity changes.
 * Returns an unsubscribe function.
 */
export function subscribeConnectivity(
  callback: (state: ConnectivityState) => void
): () => void {
  listeners.add(callback);
  
  // Immediately call with current state
  callback(currentState);
  
  return () => {
    listeners.delete(callback);
  };
}

/**
 * Update connectivity state and notify all listeners.
 */
function updateConnectivity(online: boolean) {
  const newState: ConnectivityState = { isOnline: online };
  currentState = newState;
  
  listeners.forEach((listener) => {
    try {
      listener(newState);
    } catch {
      // Ignore listener errors
    }
  });
}

/**
 * Handle online event.
 */
function handleOnline() {
  updateConnectivity(true);
}

/**
 * Handle offline event.
 */
function handleOffline() {
  updateConnectivity(false);
}

/**
 * Initialize connectivity listeners.
 * Call this once when the app starts.
 */
export function initConnectivityListeners(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  // Listen to native online/offline events
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  
  // Set initial state from navigator.onLine
  updateConnectivity(navigator.onLine);
}

/**
 * Clean up connectivity listeners.
 * Call this when the app unmounts.
 */
export function cleanupConnectivityListeners(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  window.removeEventListener('online', handleOnline);
  window.removeEventListener('offline', handleOffline);
  listeners.clear();
}
