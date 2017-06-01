import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapEl;
  constructor(public navCtrl: NavController) { }
  mapIsReady() {
    let mapEle = this.mapEl.nativeElement;
    new google.maps.Map(mapEle, {
      center: {lng: -71.4128340,lat: 41.823989041},
      zoom: 8
    });
  }
}
