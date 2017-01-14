import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { EndPage } from '../end/end';

@Component({
    selector: 'page-intro',
    templateUrl: 'intro.html'
})
export class IntroPage {
    disableSubmit: boolean = false;
    constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {

    }
    digital101() {
        this.disableSubmit = true;
        console.log('You are Digital 101');
        var senddata: any = {
            type: 'DIGITAL 101',
            intType: 101
        }

        this.http.post('https://dumex.herokuapp.com/api/save', senddata)
            .subscribe(data => {
                //go to next page with data.type
                this.navCtrl.push(EndPage, { data: senddata });
                this.disableSubmit = false;

            }, error => {
                console.log('Error');
                let alert = this.alertCtrl.create({
                    title: 'Request Failed',
                    subTitle: 'Please try again later.',
                    buttons: ['OK']
                });
                alert.present();
                this.disableSubmit = false;
            })


    }
    digital201() {
        this.disableSubmit = true;
        var senddata: any = {
            type: 'DIGITAL 201',
            intType: 201
        }

        this.http.post('https://dumex.herokuapp.com/api/save', senddata)
            .subscribe(data => {
                //go to next page;
                this.navCtrl.push(EndPage, { data: senddata });
                this.disableSubmit = false;
            }, error => {
                console.log('Error');
                let alert = this.alertCtrl.create({
                    title: 'Request Failed',
                    subTitle: 'Please try again later.',
                    buttons: ['OK']
                });
                alert.present();
                this.disableSubmit = false;
            })


        console.log('You are Digital 201');
    }
    digital301() {
        this.disableSubmit = true;
        var senddata: any = {
            type: 'DIGITAL 301',
            intType: 301
        }

        this.http.post('https://dumex.herokuapp.com/api/save', senddata)
            .subscribe(data => {
                //go to next page;
                this.navCtrl.push(EndPage, { data: senddata });
                this.disableSubmit = false;
            }, error => {
                console.log('Error');
                let alert = this.alertCtrl.create({
                    title: 'Request Failed',
                    subTitle: 'Please try again later.',
                    buttons: ['OK']
                });
                alert.present();
                this.disableSubmit = false;
            })

        console.log('You are Digital 301');
    }

}
