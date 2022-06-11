import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() chartType: boolean;
  @Output() expand = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void{
     this.expand.emit()
     this.router.navigate((['/','admin', 'chartviewer',this.name]))
  }

}
