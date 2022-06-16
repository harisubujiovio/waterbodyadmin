import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { UserProfile } from "src/app/_model/presentation/UserProfile";
import { UserService } from "src/app/_services/user.service";
import { handleError } from "src/app/_utils/errorhandler";

export class UserDataSource implements DataSource<UserProfile>
{
    private UsersSubject = new BehaviorSubject<UserProfile[]>([]);
    private UsersCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.UsersCountSubject.asObservable();

    constructor(private userService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<UserProfile[]> {
        return this.UsersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.UsersSubject.complete();
        this.loadingSubject.complete();
        this.UsersCountSubject.complete();
    }
  
    fetchUsers(roleId: string,sortField: string, sortOrder: string,filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.userService.getUsers(roleId,
            sortField,sortOrder,filterValue, pageIndex, pageSize).pipe(
            catchError(handleError<any>('fetchUsers', null)),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((userprofileviewModel => {
            this.UsersSubject.next(userprofileviewModel.results)
            this.UsersCountSubject.next(userprofileviewModel.count)
        })
        );
    }  
}