import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../../procedureTypes";

export type RcmnQuizFacts = {
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

export type RcmnProcedureInput = Omit<
  Procedure,
  "category" | "quiz" | "references"
> & {
  quizFacts: RcmnQuizFacts;
};

const NMC_RCMN_REFERENCE: ProcedureReference = {
  title:
    "Nursing and Midwifery Council of Ghana: Registered Community Mental Health Nurse Procedures",
  url: "https://nmc.gov.gh/procedures/view/RCMN",
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

export function makeRcmnQuiz(
  title: string,
  facts: RcmnQuizFacts
): ProcedureQuizQuestion[] {
  const prompts: Array<[keyof RcmnQuizFacts, string]> = [
    ["indication", `Which statement best describes when ${title} is indicated?`],
    ["preparation", `Which preparation is appropriate before ${title}?`],
    ["equipment", `Which requirement is most appropriate for ${title}?`],
    ["sequence", `Which action belongs in the correct sequence for ${title}?`],
    ["safety", `Which safety action is essential during ${title}?`],
    ["observation", `What should the community psychiatric nurse observe while providing ${title}?`],
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
        `${answer} This supports respectful, safe community mental health nursing and timely clinical decision-making.`,
    };
  });
}

export function makeRcmnProcedure(
  input: RcmnProcedureInput
): Procedure {
  const { quizFacts, ...procedure } = input;
  return {
    ...procedure,
    category: "Community Mental Health Nursing (RCMN)",
    references: [NMC_RCMN_REFERENCE, NMC_SCOPE_REFERENCE],
    quiz: makeRcmnQuiz(procedure.title, quizFacts),
  };
}
