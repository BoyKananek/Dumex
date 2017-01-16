import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
    selector: 'page-end',
    templateUrl: 'end.html'
})
export class EndPage {
    data: any;
    constructor(public navCtrl: NavController, public app: App, public params: NavParams) {
        this.data = params.get('data');
    }
    
    complete(){
        this.navCtrl.push(HomePage);
        this.navCtrl.remove(0, 2);
    }


}
