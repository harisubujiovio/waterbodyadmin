import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoomcard',
  templateUrl: './zoomcard.component.html',
  styleUrls: ['./zoomcard.component.css']
})
export class ZoomcardComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
