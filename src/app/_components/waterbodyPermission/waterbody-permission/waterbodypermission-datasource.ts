import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { AccessRights } from "src/app/_model/presentation/AccessRights";
import { AccessrightspermissionService } from "src/app/_services/accessrightspermission.service";
import { handleError } from "src/app/_utils/errorhandler";

export class WaterBodyPermissionDataSource implements DataSource<AccessRights>
{
    private ResourcesSubject = new BehaviorSubject<AccessRights[]>([]);
    private ResourcesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.ResourcesCountSubject.asObservable();

    constructor(private accessrightspermissionService: AccessrightspermissionService) {}

    connect(collectionViewer: CollectionViewer): Observable<AccessRights[]> {
        return this.ResourcesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ResourcesSubject.complete();
        this.loadingSubject.complete();
        this.ResourcesCountSubject.complete();
    }
  
    fetchRolePermissions(roleId: string) {
        this.loadingSubject.next(true);
        this.accessrightspermissionService.getRolePermissions(
            roleId).pipe(
            catchError(handleError<any>('fetchRolePermissions', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((resourceviewModel => {
            console.log('Results')
            console.log(resourceviewModel)
            this.ResourcesSubject.next(resourceviewModel)
            // this.ResourcesCountSubject.next(resourceviewModel.count)
        })
        );
    }  
}