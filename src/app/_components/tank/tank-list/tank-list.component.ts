import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { merge, tap } from 'rxjs';
import { TankService } from 'src/app/_services/tank.service';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { TankDataSource } from './tank-datasource';

@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrls: ['./tank-list.component.css']
})
export class TankListComponent implements OnInit {

  dataSource: TankDataSource;
  displayedColumns = ["filename", "createdBy", "createdDate", "details", "delete"];
  dataLength: number
  private dialogConfig: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';
  constructor(private tankService: TankService, private router: Router, private dialog: MatDialog,
    private errorService: ErrorHandlerService) {

  }

  ngOnInit(): void {
    this.dataSource = new TankDataSource(this.tankService);
    this.dataSource.fetchTanks('image','asc','');
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
        tap(() => this.BindTanks())
      )
      .subscribe();
  }
  applyFilter(event: any) {
    this.filterValue = event.target.value;
    this.paginator.pageIndex = 0;
    this.BindTanks();
  }
  BindTanks() {
    console.log(this.filterValue);
    this.dataSource.fetchTanks(
      this.sort.active,
      this.sort.direction,
      this.filterValue,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
  public redirectToDetails = (id: string) => {
    let url: string = `/tank/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/tank/edit/${id}`;
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
        this.tankService.deleteTank(id).subscribe({
          next: () => {
            this.paginator.pageIndex = 0;
            this.BindTanks();
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
