import type { Procedure } from "../procedureTypes";

import { rgnBatch01 } from "./procedures/rgn/rgnBatch01";

export const rgnProcedures: Procedure[] = [
  ...rgnBatch01,
];
