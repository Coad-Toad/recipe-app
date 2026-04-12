export type StepNote = {
  type: "tip" | "warning" | "reassurance";
  text: string;
};

export type Step = {
  id: string;
  instruction: string;
  timerSeconds?: number;
  timerLabel?: string;
  notes?: StepNote[];
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export type Recipe = {
  id: string;
  title: string;
  ingredients?: Ingredient[];
  steps: Step[];
};
