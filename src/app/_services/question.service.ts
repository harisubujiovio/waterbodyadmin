import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionViewModel } from '../_model/presentation/Questions';
import { SurveyQuestion } from '../_model/surveyquestion';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<QuestionViewModel> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    console.log(`${environment.apiUrl}/waterBodyAdmin/surveyQuestion/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`);

    return this.http.get<QuestionViewModel>(`${environment.apiUrl}/waterBodyAdmin/surveyQuestion/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`).pipe(
      catchError(handleError<QuestionViewModel>('getQuestions'))
    );
  }

  deleteQuestion(id: string) {
    return this.http.delete<SurveyQuestion>(`${environment.apiUrl}/waterBodyAdmin/surveyQuestion/${id}/`);
  }
}
