import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
declare var SMS:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mySMS:any[]=[];
    constructor(public navCtrl: NavController, public platform:Platform) {

    }

    ionViewDidEnter() {
        this.platform.ready()
        .then((readySource) => {

            let filter = {
                box : 'inbox', // 'inbox' (default), 'sent', 'draft'
                indexFrom : 0, // start from index 0
                maxCount : 10, // count of SMS to return each time
            };

            if(SMS) {
                SMS.listSMS(filter,
                    (ListSms)=>{
                        console.log("Sms", ListSms);
                        this.mySMS = ListSms;
                    },

                    Error=>{
                        console.log('error list sms: ' + Error);
                    }
                );
            };
        });
    }
}
