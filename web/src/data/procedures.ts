import type { Procedure } from "./procedureTypes";
import { rgnProcedures } from "./procedureData/rgn";
import { rmProcedures } from "./procedureData/rm";
import { rcmnProcedures } from "./procedureData/rcmn";

export type { Procedure } from "./procedureTypes";

export const procedures: Procedure[] = [
  ...rgnProcedures,
  ...rmProcedures,
  ...rcmnProcedures,
];
