import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Tank } from "src/app/_model/tank";
import { TankService } from "src/app/_services/tank.service";
import { handleError } from "src/app/_utils/errorhandler";

export class TankDataSource implements DataSource<Tank>
{
    private TanksSubject = new BehaviorSubject<Tank[]>([]);
    private tanksCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.tanksCountSubject.asObservable();

    constructor(private tankService: TankService) {}

    connect(collectionViewer: CollectionViewer): Observable<Tank[]> {
        return this.TanksSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.TanksSubject.complete();
        this.loadingSubject.complete();
        this.tanksCountSubject.complete();
    }
  
    fetchTanks(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.tankService.getTanks(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchTanks', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((roleviewModel => {
            this.TanksSubject.next(roleviewModel.results)
            this.tanksCountSubject.next(roleviewModel.count)
        })
        );
    }  
}