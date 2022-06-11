import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.css']
})
export class MinicardComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;
  @Input() title: string;
  @Input() value: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetail(name: string): void {
      console.log(name);
      if(name == 'TankSummaryCard')
        this.router.navigate((['/','tank', 'tanks']))
      else if(name == 'WaterBodyTypeSummaryCard')
        this.router.navigate((['/','waterbodytype']))
      else if(name == 'UserCard')
        this.router.navigate((['/','user','users']))
  }

}
