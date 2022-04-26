import { SurveyQuestion } from "../surveyquestion";


export interface QuestionViewModel {
    count: number;
    next: string;
    previous: string;
    results: SurveyQuestion[]
  }