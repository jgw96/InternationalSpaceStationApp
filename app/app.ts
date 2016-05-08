import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {IntroPage} from "./pages/intro/intro";
import 'rxjs/Rx';
import {enableProdMode} from "angular2/core";

//enable production mode
enableProdMode();


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = IntroPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
