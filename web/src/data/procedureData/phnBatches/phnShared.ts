import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../../procedureTypes";

export type PhnQuizFacts = {
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

export type PhnProcedureInput = Omit<
  Procedure,
  "category" | "quiz" | "references"
> & {
  quizFacts: PhnQuizFacts;
};

const NMC_PHN_REFERENCE: ProcedureReference = {
  title:
    "Nursing and Midwifery Council of Ghana: Public Health Nurse Procedures",
  url: "https://nmc.gov.gh/procedures/view/PHN",
};

const NMC_SCOPE_REFERENCE: ProcedureReference = {
  title: "Nursing and Midwifery Council of Ghana: Scope of Practice",
  url: "https://nmc.gov.gh/sop/scope-of-practice",
};

const wrong = [
  "Proceed without assessing the client or the environment",
  "Skip explanation, privacy, and confidentiality",
  "Delay documentation until an unrelated visit",
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

export function makePhnQuiz(
  title: string,
  facts: PhnQuizFacts
): ProcedureQuizQuestion[] {
  const prompts: Array<[keyof PhnQuizFacts, string]> = [
    ["indication", `Which statement best describes when ${title} is indicated?`],
    ["preparation", `Which preparation is appropriate before ${title}?`],
    ["equipment", `Which requirement is most appropriate for ${title}?`],
    ["sequence", `Which action belongs in the correct sequence for ${title}?`],
    ["safety", `Which safety action is essential during ${title}?`],
    ["observation", `What should the public health nurse observe while providing ${title}?`],
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
        `${answer} This supports respectful, safe public health nursing and timely clinical decision-making.`,
    };
  });
}

export function makePhnProcedure(
  input: PhnProcedureInput
): Procedure {
  const { quizFacts, ...procedure } = input;
  return {
    ...procedure,
    category: "Public Health Nursing (PHN)",
    references: [NMC_PHN_REFERENCE, NMC_SCOPE_REFERENCE],
    quiz: makePhnQuiz(procedure.title, quizFacts),
  };
}
