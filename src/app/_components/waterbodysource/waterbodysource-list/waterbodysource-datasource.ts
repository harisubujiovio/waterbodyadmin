import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Resource } from "src/app/_model/Resource";
import { WaterbodysourceService } from "src/app/_services/waterbodysource.service";
import { handleError } from "src/app/_utils/errorhandler";

export class WaterBodyTypeDataSource implements DataSource<Resource>
{
    private ResourcesSubject = new BehaviorSubject<Resource[]>([]);
    private ResourcesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.ResourcesCountSubject.asObservable();

    constructor(private waterbodysourceService: WaterbodysourceService) {}

    connect(collectionViewer: CollectionViewer): Observable<Resource[]> {
        return this.ResourcesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ResourcesSubject.complete();
        this.loadingSubject.complete();
        this.ResourcesCountSubject.complete();
    }
  
    fetchWaterBodySources(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.waterbodysourceService.getList(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchWaterBodySources', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((resourceviewModel => {
            this.ResourcesSubject.next(resourceviewModel.results)
            this.ResourcesCountSubject.next(resourceviewModel.count)
        })
        );
    }  
}