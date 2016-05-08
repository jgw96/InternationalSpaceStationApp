import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {IntroPage} from "./pages/intro/intro";
import {TabsPage} from "./pages/tabs/tabs";
import 'rxjs/Rx';
import {enableProdMode} from "angular2/core";

//enable production mode
enableProdMode();


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    
    if (localStorage.getItem("issFirstRun") === null) {
      this.rootPage = IntroPage;
      localStorage.setItem("issFirstRun", "This app has already ran");
    }
    else {
      this.rootPage = TabsPage;
    }
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
