import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Role } from "src/app/_model/Role";
import { RoleService } from "src/app/_services/role.service";
import { handleError } from "src/app/_utils/errorhandler";

export class RoleDataSource implements DataSource<Role>
{
    private RolesSubject = new BehaviorSubject<Role[]>([]);
    private RolesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.RolesCountSubject.asObservable();

    constructor(private roleService: RoleService) {}

    connect(collectionViewer: CollectionViewer): Observable<Role[]> {
        return this.RolesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.RolesSubject.complete();
        this.loadingSubject.complete();
        this.RolesCountSubject.complete();
    }
  
    fetchRoles(sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.roleService.getRoles(
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchRoles', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((roleviewModel => {
            this.RolesSubject.next(roleviewModel.results)
            this.RolesCountSubject.next(roleviewModel.count)
        })
        );
    }  
}