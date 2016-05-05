import {Page, NavController} from 'ionic-angular';

import {LocationProvider} from "../../providers/locationprovider/locationprovider";
import {TrimPipe} from "../..//pipes/TrimPipe";

/*
  Generated class for the SavedEventsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/saved-events/saved-events.html',
  providers: [LocationProvider],
  pipes: [TrimPipe]
})
export class SavedEventsPage {
  
  public flyovers: any[];
  
  private onPageDidEnter(): void {
    this.flyovers = this.locProvider.getSavedFlyovers();
  }
  
  constructor(private nav: NavController, private locProvider: LocationProvider) {}
  
}
