import { rmBatches, rmProcedures } from "./rm";

const QUIZ_PROGRESS_PREFIX = "nct-quiz-progress-";

export type RmBatchProgress = {
  batchNumber: number;
  total: number;
  completed: number;
  remaining: number;
  percentage: number;
  procedureIds: string[];
};

export type RmCompletion = {
  totalProcedures: number;
  completedProcedures: number;
  remainingProcedures: number;
  percentage: number;
  totalQuestions: number;
  totalBatches: number;
  batches: RmBatchProgress[];
};

function getStorage(storage?: Storage): Storage | null {
  if (storage) return storage;
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function completedIds(storage: Storage | null): Set<string> {
  const completed = new Set<string>();
  if (!storage) return completed;

  for (const procedure of rmProcedures) {
    try {
      const raw = storage.getItem(
        `${QUIZ_PROGRESS_PREFIX}${procedure.id}`,
      );
      if (!raw) continue;
      const saved: unknown = JSON.parse(raw);
      if (
        typeof saved === "object" &&
        saved !== null &&
        "completed" in saved &&
        saved.completed === true
      ) {
        completed.add(procedure.id);
      }
    } catch {
      // Ignore malformed or unavailable progress entries.
    }
  }

  return completed;
}

export function getRmCompletion(storage?: Storage): RmCompletion {
  const completed = completedIds(getStorage(storage));
  const totalProcedures = rmProcedures.length;
  const totalQuestions = rmProcedures.reduce(
    (total, procedure) => total + (procedure.quiz?.length ?? 0),
    0,
  );
  const batches: RmBatchProgress[] = rmBatches.map((batch, index) => {
    const procedureIds = batch.map((procedure) => procedure.id);
    const completedInBatch = procedureIds.filter((id) =>
      completed.has(id),
    ).length;
    const total = procedureIds.length;

    return {
      batchNumber: index + 1,
      total,
      completed: completedInBatch,
      remaining: total - completedInBatch,
      percentage: total
        ? Math.round((completedInBatch / total) * 100)
        : 0,
      procedureIds,
    };
  });

  return {
    totalProcedures,
    completedProcedures: completed.size,
    remainingProcedures: totalProcedures - completed.size,
    percentage: totalProcedures
      ? Math.round((completed.size / totalProcedures) * 100)
      : 0,
    totalQuestions,
    totalBatches: batches.length,
    batches,
  };
}