import type { Procedure } from "../procedureTypes";
import { phnBatch01 } from "./phnBatches/phnBatch01";
import { phnBatch02 } from "./phnBatches/phnBatch02";
import { phnBatch03 } from "./phnBatches/phnBatch03";
import { phnBatch04 } from "./phnBatches/phnBatch04";
import { phnBatch05 } from "./phnBatches/phnBatch05";
import { phnBatch06 } from "./phnBatches/phnBatch06";

export const phnBatches = [
  phnBatch01,
  phnBatch02,
  phnBatch03,
  phnBatch04,
  phnBatch05,
  phnBatch06,
] as const;

export const phnProcedures: Procedure[] = phnBatches.flat();
