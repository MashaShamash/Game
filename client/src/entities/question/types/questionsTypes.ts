export type Question = {
  id: number;
  themeId: number;
  answer: string;
  question: string;
};

export type QuestionId = Question['id'];

//   export type QuestionWithoutId = Omit<Question, 'id'>;
