import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { SurveyQuestion } from "src/app/_model/surveyquestion";
import { QuestionService } from "src/app/_services/question.service";
import { handleError } from "src/app/_utils/errorhandler";

export class QuestionDataSource implements DataSource<SurveyQuestion>
{
    private QuestionsSubject = new BehaviorSubject<SurveyQuestion[]>([]);
    private RolesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.RolesCountSubject.asObservable();

    constructor(private questionService: QuestionService) {}

    connect(collectionViewer: CollectionViewer): Observable<SurveyQuestion[]> {
        return this.QuestionsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.QuestionsSubject.complete();
        this.loadingSubject.complete();
        this.RolesCountSubject.complete();
    }
  
    fetchQuestions(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.questionService.getQuestions(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchQuestions', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((questionviewModel => {
            this.QuestionsSubject.next(questionviewModel.results)
            this.RolesCountSubject.next(questionviewModel.count)
        })
        );
    }  
}