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
