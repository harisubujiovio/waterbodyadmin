import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, tap } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { UserDataSource } from './user-datasource';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSource: UserDataSource;
  displayedColumns = ["first_name", "last_name", "email","mobileNumber","address", "update", "delete"];
  dataLength: number
  private dialogConfig: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';
  private roleId: string = ''
  constructor(private userService: UserService, private router: Router, private dialog: MatDialog,
    private errorService: ErrorHandlerService,private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.paramMap
      .subscribe(params => {
           this.roleId = params.get('roleId') || '';
      });
      this.dataSource = new UserDataSource(this.userService);
      this.dataSource.fetchUsers(this.roleId,'first_name', 'asc', '');
      this.dataSource.count$.subscribe(
        (length: number) => this.dataLength = length
      )
      this.dialogConfig = {
        height: '200px',
        width: '400px',
        disableClose: false,
        data: {}
      }
    }
    ngAfterViewInit() {

      // reset the paginator after sorting
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          tap(() => this.BindUsers())
        )
        .subscribe();
    }
    applyFilter(event: any) {
      this.filterValue = event.target.value;
      this.paginator.pageIndex = 0;
      this.BindUsers();
    }

    BindUsers() {
      console.log(this.filterValue);
      this.dataSource.fetchUsers(
        this.roleId,
        this.sort.active,
        this.sort.direction,
        this.filterValue,
        this.paginator.pageIndex,
        this.paginator.pageSize);
    }

    public redirectToDetails = (id: string) => {
      let url: string = `/user/details/${id}`;
      this.router.navigate([url]);
    }
  
    public redirectToUpdate = (id: string) => {
      let url: string = `/user/edit/${id}`;
      this.router.navigate([url]);
    }
  
    public delete = (id: string,userid: number) => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure want to delete?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      })
  
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.userService.deleteRole(id,userid).subscribe({
            next: () => {
              this.paginator.pageIndex = 0;
              this.BindUsers();
            },
            error: (error:any) => {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleError(error);
            }
          });
        }
      });
  
    }

}
