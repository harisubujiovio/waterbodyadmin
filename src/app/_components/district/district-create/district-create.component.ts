import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { DistrictService } from 'src/app/_services/district.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';

@Component({
  selector: 'app-district-create',
  templateUrl: './district-create.component.html',
  styleUrls: ['./district-create.component.css']
})
export class DistrictCreateComponent implements OnInit {
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  private dialogConfig: any;
  resourceForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    description: [null]

  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private districtService: DistrictService,
    private authService: AuthenticationService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) 
    {
      this.user = this.authService.userValue;
    }

  ngOnInit(): void {
  }

}
