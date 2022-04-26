import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserProfile } from 'src/app/_model/presentation/UserProfile';

@Component({
  selector: 'app-roleuser',
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.css']
})
export class RoleuserComponent implements OnInit, AfterViewInit  {
  @Input() public accounts: UserProfile[];
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'mobileNumber','phoneNumber'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { 
   
  }

  ngOnInit(): void {
    console.log("Received users are below");
    console.log(this.accounts);
    this.dataSource = new MatTableDataSource<UserProfile>(this.accounts);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
