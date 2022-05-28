import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { handleError } from "src/app/_utils/errorhandler";
import { Resource } from "../_model/Resource";
import { ResourceService } from "../_services/resource.service";

export class ResourceDataSource<T> implements DataSource<T>
{
    private ResourcesSubject = new BehaviorSubject<T[]>([]);
    private ResourcesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.ResourcesCountSubject.asObservable();

    constructor(private resourceService: ResourceService<T>) {}

    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return this.ResourcesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ResourcesSubject.complete();
        this.loadingSubject.complete();
        this.ResourcesCountSubject.complete();
    }
  
    fetchResource(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.resourceService.getList(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchResource', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((resourceModel => {
            this.ResourcesSubject.next(resourceModel.results)
            this.ResourcesCountSubject.next(resourceModel.count)
        })
        );
    }  
}