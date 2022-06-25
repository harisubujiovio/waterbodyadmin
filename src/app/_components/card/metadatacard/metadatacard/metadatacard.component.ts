import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadatacard',
  templateUrl: './metadatacard.component.html',
  styleUrls: ['./metadatacard.component.css']
})
export class MetadatacardComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  @Input() selectedFeatureProperties: any;
  constructor() { }

  ngOnInit(): void {
  }

}
