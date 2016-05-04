import {Page, Loading, NavController} from 'ionic-angular';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NgZone} from "angular2/core";

import {LocationProvider} from "../../providers/locationprovider/locationprovider";

@Page({
  templateUrl: 'build/pages/page2/page2.html',
  providers: [HTTP_PROVIDERS, LocationProvider],
})
export class Page2 {

  public positionLat: string;
  public positionLong: string;
  public url: string;

  private onPageLoaded(): void {
    let loading = Loading.create({
      content: "Getting Map Data",
      duration: 5000
    })
    this.nav.present(loading);
    setInterval(() => {
      this.locProvider.getCurrentPosition()
        .subscribe(
        data => {
          console.log(data);
          this.positionLat = data.iss_position.latitude;
          this.positionLong = data.iss_position.longitude;
          this.zone.run(() => {
            this.url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.positionLat},${this.positionLong}&zoom=1&size=600x600&markers=color:red|${this.positionLat},${this.positionLong}&key=AIzaSyBqrwCzHylPcikGsOLQleFDekQvGc5af1A`;
          })
        },
        error => alert(error));
    }, 5000)
  }

  constructor(private locProvider: LocationProvider, private zone: NgZone, private nav: NavController) {

  }
}
