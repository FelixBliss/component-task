import type { Procedure } from "../procedureTypes";

const NMC_REFERENCE = {
  title: "Nursing and Midwifery Council of Ghana: Pain Management Procedures",
  url: "https://nmc.gov.gh/procedures/view/PM",
};

export const pmProcedureIds: string[] = [
  "pm-001",
  "pm-002",
  "pm-003",
  "pm-004",
  "pm-005",
  "pm-006",
  "pm-007",
  "pm-008",
  "pm-009",
];

export function getPmCompletion(completedIds: string[]): {
  completed: number;
  total: number;
  percentage: number;
  remaining: string[];
} {
  const completed = completedIds.filter((id) => pmProcedureIds.includes(id));
  const total = pmProcedureIds.length;
  const remaining = pmProcedureIds.filter((id) => !completedIds.includes(id));
  const percentage = total > 0 ? (completed.length / total) * 100 : 0;

  return {
    completed: completed.length,
    total,
    percentage,
    remaining,
  };
}

export function isPmProcedureComplete(
  procedureId: string,
  completedIds: string[]
): boolean {
  return completedIds.includes(procedureId);
}
