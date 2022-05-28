import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Panchayat } from "src/app/_model/Panchayat";
import { PanchayatService } from "src/app/_services/panchayat.service";
import { handleError } from "src/app/_utils/errorhandler";

export class PanchayatDataSource implements DataSource<Panchayat>
{
    private PanchayatsSubject = new BehaviorSubject<Panchayat[]>([]);
    private PanchayatsCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.PanchayatsCountSubject.asObservable();

    constructor(private panchayatService: PanchayatService) {}

    connect(collectionViewer: CollectionViewer): Observable<Panchayat[]> {
        return this.PanchayatsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.PanchayatsSubject.complete();
        this.loadingSubject.complete();
        this.PanchayatsCountSubject.complete();
    }
  
    fetchPanchayats(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.panchayatService.getList(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchPanchayats', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((panchayatviewModel => {
            this.PanchayatsSubject.next(panchayatviewModel.results)
            this.PanchayatsCountSubject.next(panchayatviewModel.count)
        })
        );
    }  
}