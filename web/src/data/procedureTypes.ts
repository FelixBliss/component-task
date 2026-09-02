export type ProcedureReference = {
  title: string;
  url: string;
};

export type ProcedureQuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export type Procedure = {
  id: string;
  title: string;
  category: string;
  overview: string;
  purpose: string[];
  indications: string[];
  equipment: string[];
  steps: string[];
  precautions: string[];
  contraindications?: string[];
  preparation?: string[];
  afterCare?: string[];
  documentation?: string[];
  complications?: string[];
  patientEducation?: string[];
  nursingConsiderations?: string[];
  references?: ProcedureReference[];
  videoUrl?: string;
  quiz?: ProcedureQuizQuestion[];
};
