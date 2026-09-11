import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../../procedureTypes";

export type PaedQuizFacts = {
  indication: string;
  preparation: string;
  equipment: string;
  sequence: string;
  safety: string;
  observation: string;
  redFlag: string;
  documentation: string;
  education: string;
  escalation: string;
};

export type PaedProcedureInput = Omit<
  Procedure,
  "category" | "quiz" | "references"
> & {
  quizFacts: PaedQuizFacts;
};

const NMC_PAED_REFERENCE: ProcedureReference = {
  title:
    "Nursing and Midwifery Council of Ghana: Paediatric Nurse Procedures",
  url: "https://nmc.gov.gh/procedures/view/PAED",
};

const NMC_SCOPE_REFERENCE: ProcedureReference = {
  title: "Nursing and Midwifery Council of Ghana: Scope of Practice",
  url: "https://nmc.gov.gh/sop/scope-of-practice",
};

const wrong = [
  "Proceed without assessing the child or the environment",
  "Skip explanation to child and caregiver",
  "Delay documentation until end of shift",
];

function options(
  correct: string,
  index: number
): string[] {
  const values = [
    correct,
    wrong[index % wrong.length],
    wrong[(index + 1) % wrong.length],
    wrong[(index + 2) % wrong.length],
  ];
  return [...new Set(values)];
}

export function makePaedQuiz(
  title: string,
  facts: PaedQuizFacts
): ProcedureQuizQuestion[] {
  const prompts: Array<[keyof PaedQuizFacts, string]> = [
    ["indication", `Which statement best describes when ${title} is indicated?`],
    ["preparation", `Which preparation is appropriate before ${title}?`],
    ["equipment", `Which requirement is most appropriate for ${title}?`],
    ["sequence", `Which action belongs in the correct sequence for ${title}?`],
    ["safety", `Which safety action is essential during ${title}?`],
    ["observation", `What should the paediatric nurse observe while providing ${title}?`],
    ["redFlag", `Which finding is a warning sign during or after ${title}?`],
    ["documentation", `What should be documented after ${title}?`],
    ["education", `Which teaching point is appropriate for ${title}?`],
    ["escalation", `What is the safest response when a complication or risk arises during ${title}?`],
  ];

  return prompts.map(([key, question], index) => {
    const answer = facts[key];
    return {
      question,
      options: options(answer, index),
      answer,
      explanation:
        `${answer} This supports respectful, safe paediatric nursing care and timely clinical decision-making.`,
    };
  });
}

export function makePaedProcedure(
  input: PaedProcedureInput
): Procedure {
  const { quizFacts, ...procedure } = input;
  return {
    ...procedure,
    category: "Paediatric Nursing (PAED)",
    references: [NMC_PAED_REFERENCE, NMC_SCOPE_REFERENCE],
    quiz: makePaedQuiz(procedure.title, quizFacts),
  };
}
