export type Question = {
    id: number;
    themeId: number;
    answer: string;
    img: string;
    // не забыть переписать
    genreId: number;
  };
  
  export type QuestionId = Question['id'];
  
//   export type QuestionWithoutId = Omit<Question, 'id'>;