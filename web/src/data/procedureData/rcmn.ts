import type { Procedure } from "../procedureTypes";
import { rcmnBatch01 } from "./rcmnBatches/rcmnBatch01";
import { rcmnBatch02 } from "./rcmnBatches/rcmnBatch02";
import { rcmnBatch03 } from "./rcmnBatches/rcmnBatch03";
import { rcmnBatch04 } from "./rcmnBatches/rcmnBatch04";
import { rcmnBatch05 } from "./rcmnBatches/rcmnBatch05";

export const rcmnBatches = [
  rcmnBatch01,
  rcmnBatch02,
  rcmnBatch03,
  rcmnBatch04,
  rcmnBatch05,
] as const;

export const rcmnProcedures: Procedure[] = rcmnBatches.flat();
