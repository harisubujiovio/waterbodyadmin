import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { merge, tap } from 'rxjs';
import { Panchayat } from 'src/app/_model/Panchayat';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { PanchayatDataSource } from './panchayat-datasource';

@Component({
  selector: 'app-panchayats-list',
  templateUrl: './panchayats-list.component.html',
  styleUrls: ['./panchayats-list.component.css']
})
export class PanchayatsListComponent implements OnInit {

  dataSource: PanchayatDataSource;
  displayedColumns = ["code","name","blockname", "update", "delete"];
  dataLength: number
  private dialogConfig: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';
  constructor(private panchayatService: PanchayatService, private router: Router, private dialog: MatDialog,
    private errorService: ErrorHandlerService) { }

    ngOnInit(): void {
      this.dataSource = new PanchayatDataSource(this.panchayatService);
      this.dataSource.fetchPanchayats('name', 'asc', '');
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
          tap(() => this.BindPanchayats())
        )
        .subscribe();
    }
    applyFilter(event: any) {
      this.filterValue = event.target.value;
      this.paginator.pageIndex = 0;
      this.BindPanchayats();
    }
    BindPanchayats() {
      console.log(this.filterValue);
      this.dataSource.fetchPanchayats(
        this.sort.active,
        this.sort.direction,
        this.filterValue,
        this.paginator.pageIndex,
        this.paginator.pageSize);
    }
    public redirectToDetails = (id: string) => {
      let url: string = `/panchayat/details/${id}`;
      this.router.navigate([url]);
    }
    public redirectToUpdate = (id: string) => {
      let url: string = `/panchayat/edit/${id}`;
      this.router.navigate([url]);
    }
  
    public delete = (id: string) => {
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
          this.panchayatService.delete(id).subscribe({
            next: () => {
              this.paginator.pageIndex = 0;
              this.BindPanchayats();
            },
            error: error => {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleError(error);
            }
          });
        }
      });
  
    }


}
