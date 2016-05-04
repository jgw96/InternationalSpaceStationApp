import {Page, Alert, NavController, Loading} from 'ionic-angular';
import {HTTP_PROVIDERS} from 'angular2/http';

import {LocationProvider} from "../../providers/locationprovider/locationprovider";
import {TimePipe} from "../../pipes/TimePipe";
import {StmPipe} from "../../pipes/STMPipe";


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [HTTP_PROVIDERS, LocationProvider],
  pipes: [TimePipe, StmPipe]
})
export class Page1 {

  public flyovers: any[];

  private onPageLoaded(): void {
    let loading = Loading.create({
      content: "Getting flyovers"
    })
    this.nav.present(loading).then(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locProvider.getFlyOvers(position.coords.latitude, position.coords.longitude)
          .subscribe(
          data => {
            console.log(data.response);
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
    let fixedStartDate: Date = new Date(startDate * 1000);

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

}
