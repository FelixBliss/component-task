import type { Procedure } from "../procedureTypes";
import { paedBatch01 } from "./paedBatches/paedBatch01";
import { paedBatch02 } from "./paedBatches/paedBatch02";
import { paedBatch03 } from "./paedBatches/paedBatch03";
import { paedBatch04 } from "./paedBatches/paedBatch04";

export const paedProcedures: Procedure[] = [
  ...paedBatch01,
  ...paedBatch02,
  ...paedBatch03,
  ...paedBatch04,
];
