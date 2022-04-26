import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { RoleWithUser } from 'src/app/_model/presentation/RoleWithUser';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  public role$: Observable<RoleWithUser>;
  public roleId: string
  constructor(private router: Router, private activeRoute: ActivatedRoute, private roleService: RoleService,
    private location: Location) { 
     
    }

  ngOnInit(): void {
    this.getRoleDetails();
  }
  private getRoleDetails = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    this.roleId = id;
    this.role$ = this.roleService.getById(id);
  }
  public onCancel = () => {
    this.location.back();
  }
}
