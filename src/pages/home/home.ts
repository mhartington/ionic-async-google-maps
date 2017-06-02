import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapEl;
  constructor(public navCtrl: NavController) { }
  mapIsReady() {
    new google.maps.Map(this.mapEl.nativeElement, {
      center: { lng: -71.4128340, lat: 41.823989041 },
      zoom: 16
    });
  }
}
