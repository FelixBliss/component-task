import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../../procedureTypes";

export type RmnQuizFacts = {
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

export type RmnProcedureInput = Omit<
  Procedure,
  "category" | "quiz" | "references"
> & {
  quizFacts?: RmnQuizFacts;
};

const NMC_RMN_REFERENCE: ProcedureReference = {
  title:
    "Nursing and Midwifery Council of Ghana: Registered Mental Health Nurse Procedures",
  url: "https://nmc.gov.gh/procedures/view/RMN",
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

export function makeRmnQuiz(
  title: string,
  facts: RmnQuizFacts
): ProcedureQuizQuestion[] {
  const prompts: Array<[keyof RmnQuizFacts, string]> = [
    ["indication", `Which statement best describes when ${title} is indicated?`],
    ["preparation", `Which preparation is appropriate before ${title}?`],
    ["equipment", `Which requirement is most appropriate for ${title}?`],
    ["sequence", `Which action belongs in the correct sequence for ${title}?`],
    ["safety", `Which safety action is essential during ${title}?`],
    ["observation", `What should the mental health nurse observe while providing ${title}?`],
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
        `${answer} This supports respectful, safe mental health nursing and timely clinical decision-making.`,
    };
  });
}

export function makeRmnProcedure(
  input: RmnProcedureInput
): Procedure {
  const { quizFacts, ...procedure } = input;
  const generatedFacts: RmnQuizFacts = {
    indication:
      procedure.overview ||
      "Follow the approved clinical indication and care plan for this procedure.",
    preparation:
      procedure.preparation[0] ||
      procedure.steps[0] ||
      "Prepare the patient, environment and required resources before starting.",
    equipment:
      procedure.equipment[0] ||
      "Use the equipment and resources specified for the procedure.",
    sequence:
      procedure.steps[1] ||
      procedure.steps[0] ||
      "Follow the documented procedure steps in the correct sequence.",
    safety:
      procedure.precautions[0] ||
      "Maintain privacy, confidentiality, safety and appropriate observation throughout the procedure.",
    observation:
      procedure.steps.find((step) => /observe|assess|monitor|check|assure|watch/i.test(step)) ||
      "Observe the patient’s response and relevant clinical findings throughout the procedure.",
    redFlag:
      "Any unexpected deterioration, significant risk or unsafe finding should prompt immediate assessment and appropriate escalation.",
    documentation:
      procedure.documentation[0] ||
      procedure.steps.find((step) => /document|record|report/i.test(step)) ||
      "Document the procedure, findings, patient response and relevant actions in the appropriate record.",
    education:
      procedure.patientEducation[0] ||
      "Explain relevant information to the patient and family in clear, understandable language.",
    escalation:
      "Stop or modify the procedure as appropriate, ensure patient safety and promptly escalate significant concerns to the responsible clinician or senior nurse.",
  };

  return {
    ...procedure,
    category: "Registered Mental Health Nursing (RMN)",
    references: [NMC_RMN_REFERENCE, NMC_SCOPE_REFERENCE],
    quiz: makeRmnQuiz(procedure.title, quizFacts ?? generatedFacts),
  };
}
