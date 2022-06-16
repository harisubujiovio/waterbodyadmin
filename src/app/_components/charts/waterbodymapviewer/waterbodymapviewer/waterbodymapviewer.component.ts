import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';
import {defaults} from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import * as olProj from 'ol/proj';
import { GeocodeserviceService } from 'src/app/_services/geocodeservice.service';

@Component({
  selector: 'app-waterbodymapviewer',
  templateUrl: './waterbodymapviewer.component.html',
  styleUrls: ['./waterbodymapviewer.component.css']
})
export class WaterbodymapviewerComponent implements OnInit {
   map: any;
  constructor(private geocodeService: GeocodeserviceService) { }

  ngOnInit(): void {
    this.intializeMap();
  }

  intializeMap()
  {
    console.log('Map component calling')
    var mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position') || '',
      undefinedHTML: '&nbsp;'
    });
    
    this.map = new Map({
      target: 'map',
      controls: defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([78.11621, 9.925615]),
        zoom: 8
      })
    });

  }
  getCoordinates(event: any){
    var coordinate = this.map.getEventCoordinate(event);
    var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    console.log(lonlat);
    
    var lon = lonlat[0];
    var lat = lonlat[1];
   // alert(`lat: ${lat} long: ${lon}`);
    this.simpleReverseGeocoding(lon,lat);
  }
  simpleReverseGeocoding(lon:number, lat:number) : void {
      this.geocodeService.getReverseGeoCodingDetail(lon,lat)
      .subscribe(data => console.log(data));
  }
}


