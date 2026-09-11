import type { Procedure } from "./procedureTypes";
import { rgnProcedures } from "./procedureData/rgn";
import { rmProcedures } from "./procedureData/rm";
import { rcmnProcedures } from "./procedureData/rcmn";
import { rmnProcedures } from "./procedureData/rmn";
import { phnProcedures } from "./procedureData/phn";
import { paedProcedures } from "./procedureData/paed";
import { pmProcedures } from "./procedureData/pm";

export type { Procedure } from "./procedureTypes";

export const procedures: Procedure[] = [
  ...rgnProcedures,
  ...rmProcedures,
  ...rcmnProcedures,
  ...rmnProcedures,
  ...phnProcedures,
  ...paedProcedures,
  ...pmProcedures,
];
