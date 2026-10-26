import { rgnBatch01 } from "./rgnBatches/rgnBatch01";
import { rgnBatch02 } from "./rgnBatches/rgnBatch02";
import { rgnBatch03 } from "./rgnBatches/rgnBatch03";
import { rgnBatch04 } from "./rgnBatches/rgnBatch04";
import { rgnBatch05 } from "./rgnBatches/rgnBatch05";
import { rgnBatch06 } from "./rgnBatches/rgnBatch06";
import { rgnBatch07 } from "./rgnBatches/rgnBatch07";
import { rgnBatch08 } from "./rgnBatches/rgnBatch08";
import type { Procedure } from "../procedureTypes";
import { completeRgnProcedure } from "./rgnCompletion";

export const rgnProcedures: Procedure[] = [
  ...rgnBatch01,
  ...rgnBatch02,
  ...rgnBatch03,
  ...rgnBatch04,
  ...rgnBatch05,
  ...rgnBatch06,
  ...rgnBatch07,
  ...rgnBatch08,
].map(completeRgnProcedure).sort((a, b) => {
  const aNumber = Number(a.id.match(/(\d+)$/)?.[1] ?? 0);
  const bNumber = Number(b.id.match(/(\d+)$/)?.[1] ?? 0);
  return aNumber - bNumber;
});
