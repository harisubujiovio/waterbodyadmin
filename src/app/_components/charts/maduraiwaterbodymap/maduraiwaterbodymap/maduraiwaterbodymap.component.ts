import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import Vector from 'ol/source/Vector';
import KML from 'ol/format/KML';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Stamen from 'ol/source/Stamen';
import * as olProj from 'ol/proj';
import { environment } from 'src/environments/environment';
import Select from 'ol/interaction/Select';
import { GeocodeserviceService } from 'src/app/_services/geocodeservice.service';
import { fromLonLat } from 'ol/proj';
import { defaults } from 'ol/control';
@Component({
  selector: 'app-maduraiwaterbodymap',
  templateUrl: './maduraiwaterbodymap.component.html',
  styleUrls: ['./maduraiwaterbodymap.component.css']
})
export class MaduraiwaterbodymapComponent implements OnInit {
  map:any
  selectSingleClick:any
  @Output() maplocationclicked = new EventEmitter<any>();
  constructor(private geocodeService: GeocodeserviceService) { }
  mapView = new View({
    // center: fromLonLat([78.11621, 9.925615]),
    center: [8698993.953294277, 1109317.25397479],
    zoom: 10
  });
  maduraiTile = new TileLayer({
    source: new OSM()
  }); 
  
  maduraiWaterBodyTile =  new TileLayer({
    source: new TileWMS({
      url: environment.geoServerURL,
      params: {'LAYERS': 'WaterBody:MaduraiWaterBodies', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  });
 
  ngOnInit(): void {
    
    
    const vector = new VectorLayer({
      source: new VectorSource({
        url: 'KMLFiles/Paravai.kml',
        format: new KML({
          extractStyles: true, 
          showPointNames: true
        }),
      }),
    });
    
    this.map = new Map({
      target: 'map',
      controls: defaults({
        attributionOptions: {
          collapsible: false
        }
      }),
      layers: [
        this.maduraiTile,
        this.maduraiWaterBodyTile
      ],
      view: this.mapView
    });
    this.selectSingleClick = new Select();
    this.map.addInteraction(this.selectSingleClick);

     // display layer data on every pointer move
    this.map.on('pointermove', (event:any) => {
       //  console.log(this.map.getView().getCenter())
        // console.log(this.maduraiTile.getData(event.pixel));
    });
  }

  getCoordinates(event: any){
    var coordinate = this.map.getEventCoordinate(event);
    // var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    // var lon = lonlat[0];
    // var lat = lonlat[1];
   var resolution = this.mapView.getResolution() || 0;
   var url = this.maduraiWaterBodyTile.getSource()?.getFeatureInfoUrl(coordinate, resolution,"EPSG:3857",{
      'INFO_FORMAT': 'application/json',
      'propertyName': 'Tank_Name,Village,Block,Taluk,Cap_MCM'
   });

   if(url)
   {
       this.geocodeService.getFeatureInfo(url)
          .subscribe(data =>{
            if(data != null && data.numberReturned > 0)
            {
               console.log(data.features[0]);
               this.maplocationclicked.emit(data.features[0].properties)
            }
          });
   }
  }

  simpleReverseGeocoding(lon:number, lat:number) : void {
      this.geocodeService.getReverseGeoCodingDetail(lon,lat)
      .subscribe(data => console.log(data));
  }

  getPopUpInfo(event: any){
     var resolution = this.mapView.getResolution()
    console.log(this.map)
  }
}
