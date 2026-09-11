import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../../procedureTypes";

export type RmQuizFacts = {
  indication: string;
  preparation: string;
  equipment: string;
  sequence: string;
  infection: string;
  observation: string;
  redFlag: string;
  documentation: string;
  education: string;
  escalation: string;
};

export type RmProcedureInput = Omit<
  Procedure,
  "category" | "quiz" | "references"
> & {
  quizFacts: RmQuizFacts;
};

const NMC_RM_REFERENCE: ProcedureReference = {
  title: "Nursing and Midwifery Council of Ghana: Registered Midwife Procedures",
  url: "https://nmc.gov.gh/procedures/view/RM",
};

const NMC_SCOPE_REFERENCE: ProcedureReference = {
  title: "Nursing and Midwifery Council of Ghana: Scope of Practice",
  url: "https://nmc.gov.gh/sop/scope-of-practice",
};

const wrong = [
  "Proceed without checking the woman or newborn",
  "Skip explanation, privacy, and consent",
  "Delay documentation until an unrelated visit",
];

function options(correct: string, index: number): string[] {
  const values = [correct, wrong[index % wrong.length], wrong[(index + 1) % wrong.length], wrong[(index + 2) % wrong.length]];
  return [...new Set(values)];
}

export function makeRmQuiz(
  title: string,
  facts: RmQuizFacts,
): ProcedureQuizQuestion[] {
  const prompts: Array<[keyof RmQuizFacts, string]> = [
    ["indication", `Which statement best describes when ${title} is indicated?`],
    ["preparation", `Which preparation is appropriate before ${title}?`],
    ["equipment", `Which requirement is most appropriate for ${title}?`],
    ["sequence", `Which action belongs in the correct sequence for ${title}?`],
    ["infection", `Which infection-prevention action is essential during ${title}?`],
    ["observation", `What should the midwife observe while providing ${title}?`],
    ["redFlag", `Which finding is a warning sign during or after ${title}?`],
    ["documentation", `What should be documented after ${title}?`],
    ["education", `Which teaching point is appropriate for ${title}?`],
    ["escalation", `What is the safest response when a complication occurs during ${title}?`],
  ];

  return prompts.map(([key, question], index) => {
    const answer = facts[key];
    return {
      question,
      options: options(answer, index),
      answer,
      explanation: `${answer} This supports respectful, safe midwifery care and timely clinical decision-making.`,
    };
  });
}

export function makeRmProcedure(input: RmProcedureInput): Procedure {
  const { quizFacts, ...procedure } = input;
  return {
    ...procedure,
    category: "Midwifery (RM)",
    references: [NMC_RM_REFERENCE, NMC_SCOPE_REFERENCE],
    quiz: makeRmQuiz(procedure.title, quizFacts),
  };
}