import {Page, NavController} from 'ionic-angular';

import {TabsPage} from "../tabs/tabs";

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/intro/intro.html',
  directives: [TabsPage]
})
export class IntroPage {
  constructor(public nav: NavController) {}
  
  goToMain() {
    this.nav.setRoot(TabsPage);
  }
  
}
