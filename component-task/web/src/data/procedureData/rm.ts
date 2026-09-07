import type { Procedure } from "../procedureTypes";
import { rmBatch01 } from "./rmBatches/rmBatch01";
import { rmBatch02 } from "./rmBatches/rmBatch02";
import { rmBatch03 } from "./rmBatches/rmBatch03";
import { rmBatch04 } from "./rmBatches/rmBatch04";
import { rmBatch05 } from "./rmBatches/rmBatch05";
import { rmBatch06 } from "./rmBatches/rmBatch06";

export const rmBatches = [
  rmBatch01,
  rmBatch02,
  rmBatch03,
  rmBatch04,
  rmBatch05,
  rmBatch06,
] as const;

export const rmProcedures: Procedure[] = rmBatches.flat();