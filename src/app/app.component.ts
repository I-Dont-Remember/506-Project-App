import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { PagePage } from '../pages/page/page';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
             public splashScreen: SplashScreen, public androidPermissions: AndroidPermissions) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage },
      {title: 'Page', component: PagePage }
    ];
  }


    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.enablePermission();
      });
    }

    openPage(page) {
      this.nav.setRoot(page.component);
    }

   enablePermission() {
       //permissions for sending text
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
      success => console.log('Permission granted'),
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);




    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
      success => console.log('Permission granted'),
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS]);
   }

}
