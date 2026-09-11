import type { Procedure } from "../procedureTypes";
import { rmnBatch01 } from "./rmnBatches/rmnBatch01";
import { rmnBatch02 } from "./rmnBatches/rmnBatch02";
import { rmnBatch03 } from "./rmnBatches/rmnBatch03";
import { rmnBatch04 } from "./rmnBatches/rmnBatch04";
import { rmnBatch05 } from "./rmnBatches/rmnBatch05";
import { rmnBatch06 } from "./rmnBatches/rmnBatch06";

export const rmnBatches = [
  rmnBatch01,
  rmnBatch02,
  rmnBatch03,
  rmnBatch04,
  rmnBatch05,
  rmnBatch06,
] as const;

export const rmnProcedures: Procedure[] = rmnBatches.flat();
