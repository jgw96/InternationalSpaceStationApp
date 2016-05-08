import {Page, Alert, NavController, Loading} from 'ionic-angular';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Geolocation} from "ionic-native";

import {LocationProvider} from "../../providers/locationprovider/locationprovider";
import {TimePipe} from "../../pipes/TimePipe";
import {StmPipe} from "../../pipes/STMPipe";
import {SavedEventsPage} from "../saved-events/saved-events";


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [HTTP_PROVIDERS, LocationProvider],
  pipes: [TimePipe, StmPipe],
  directives: [SavedEventsPage]
})
export class Page1 {

  public flyovers: any[];

  private onPageLoaded(): void {
    const loading = Loading.create({
      content: "Getting flyovers"
    })
    this.nav.present(loading).then(() => {
      Geolocation.getCurrentPosition().then((position) => {
        this.locProvider.getFlyOvers(position.coords.latitude, position.coords.longitude)
          .subscribe(
          data => {
            this.flyovers = data.response
            loading.dismiss();
          },
          error => {
            loading.dismiss();
            alert(error)
          });
      })
    })

  }

  constructor(private locProvider: LocationProvider, private nav: NavController) {

  }

  public createEvent(title: string, location: string, notes: string, startDate: any): void {
    const fixedStartDate: Date = new Date(startDate * 1000);

    const confirm = Alert.create({
      title: 'Add this to your Calendar?',
      message: 'Would you like to add this to your calendar?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.locProvider.calendarCreate(title, location, notes, fixedStartDate, fixedStartDate);
          }
        }
      ]
    });

    this.nav.present(confirm);
  }
  
  public seeSavedEvents(): void {
    console.log("clicked");
    this.nav.push(SavedEventsPage);
  }

}
