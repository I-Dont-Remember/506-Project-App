import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { LibSMS } from '../../providers/providers';
import { SMS as SMSsender } from '@ionic-native/sms';
declare var SMS:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mySMS:any[]=[];
    constructor(public navCtrl: NavController, public platform:Platform, private libSMS: LibSMS, private smsSender: SMSsender) {

    }

    changeMessage() {
        this.libSMS.setMessage("Home page yeah");
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


    checkPermission() {
        console.log("LUCIDATA: checking if we have permission to send text");
        this.smsSender.hasPermission()
        .then(function(havePermission) {
            if (havePermission == true) {
                console.log("LUCIDATA: havePermission is true");
            } else if (havePermission == false){
                console.log("LUCIDATA: havePermission is false");
            } else {
                console.log("LUCIDATA: havePermission is neither false nor true")
            }
        })
    }


    sendTestText() {
        const smsOptions = {
            replaceLineBreaks: false,
            android: {
                intent: ""
            }
        }

        this.smsSender.hasPermission()
        .then(function(havePermission) {
            if (havePermission == true) {
                console.log("LUCIDATA: have permission, trying to send sms");

                // try {
                    this.smsSender.send("9522502550", "hyello kevin", smsOptions)
                    .then(function(response) {
                        console.log("LUCIDATA: SUCCESS SENDING TEXT");
                    })
                    .catch(function(error) {
                        console.log("LUCIDATA: ERROR SENDING TEXT: ", error);
                    })
                // } catch(e) {
                //     console.log("LUCIDATA: UH OH ERROR SENDING TEXT: ", e);
                // }

            }
            // we don't have permission to send sms
            else {
                console.log("LUCIDATA: no permission to send sms");
            }
        })


    }

}
