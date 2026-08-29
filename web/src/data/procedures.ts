import type { Procedure } from "./procedureTypes";
import { rgnProcedures } from "./procedureData/rgn";

export type { Procedure } from "./procedureTypes";

export const procedures: Procedure[] = [
  ...rgnProcedures,
];
