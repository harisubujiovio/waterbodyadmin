import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chartzoomviewer',
  templateUrl: './chartzoomviewer.component.html',
  styleUrls: ['./chartzoomviewer.component.css']
})
export class ChartzoomviewerComponent implements OnInit {
  public chartName: string
  constructor(private route: ActivatedRoute) 
  {
  }

  ngOnInit(): void {
    this.route.paramMap
       .subscribe(params => {
            this.chartName = params.get('name') || '';
       });
  }

}
