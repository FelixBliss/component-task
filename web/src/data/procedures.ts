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
  videoUrl?: string;
  quiz?: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

/*
 * Nursing Component Task
 * Procedure data structure
 *
 * Add verified N&MC procedures here.
 * Keep each procedure linked to its own video and quiz.
 */

export const procedures: Procedure[] = [
  // Example structure — replace/add with verified procedures.

  {
    id: "rgn-001",
    title: "Example Nursing Procedure",
    category: "General Nursing (RGN)",

    overview:
      "Procedure information will be added from the verified nursing procedure resource.",

    purpose: [
      "Purpose information will be added.",
    ],

    indications: [
      "Indications will be added.",
    ],

    equipment: [
      "Required equipment will be added.",
    ],

    steps: [
      "Step 1 will be added.",
      "Step 2 will be added.",
      "Step 3 will be added.",
    ],

    precautions: [
      "Relevant precautions will be added.",
    ],

    videoUrl: "",

    quiz: [
      {
        question: "What is the first step of this procedure?",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D",
        ],
        answer: "Option A",
      },
    ],
  },
];
