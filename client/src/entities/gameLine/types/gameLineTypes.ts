export type GameLine = {
  id: number;
  gameId: number;
  questionId: number;
  gameLineStatus: boolean;
  Question: {
    id: number;
    themeId: number;
    question: string;
    answer: string;
    img: string;
  };
};

export type GameLineId = GameLine['id'];
export type GameLineWithoutId = Omit<GameLine, 'id'>;
export type GameLineGameLineStatus = GameLine['gameLineStatus'];
//   export type QuestionWithoutId = Omit<Question, 'id'>;
