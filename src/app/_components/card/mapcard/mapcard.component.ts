import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapcard',
  templateUrl: './mapcard.component.html',
  styleUrls: ['./mapcard.component.css']
})
export class MapcardComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
