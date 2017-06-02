import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LazyMapModule } from '../../components/lazy-map/lazy-map.module'
@NgModule({
  declarations: [ HomePage ],
  imports: [IonicPageModule.forChild(HomePage), LazyMapModule]
})
export class HomePageModule{}
