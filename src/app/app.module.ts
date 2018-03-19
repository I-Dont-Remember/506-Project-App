import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AndroidPermissions} from '@ionic-native/android-permissions';
import { PagePage } from '../pages/page/page';
import { LibSMS } from '../providers/providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagePage
  ],
  providers: [
    StatusBar,AndroidPermissions,
    SplashScreen, LibSMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
