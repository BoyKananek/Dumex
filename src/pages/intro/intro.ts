import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController,public http: Http) {
    
  }
  digital101(){
      console.log('You are Digital 101');
      var data: any = {
          type: 'Digital 101'
      }
      this.http.post('https://dumex.herokuapp.com/api/save', data)
      .subscribe(data=>{
          //go to next page with data.type
      },error =>{
          console.log('Error');
      })
      

  }
  digital201(){
      var data: any ={
          type : 'Digital 201'
      }
      this.http.post('https://dumex.herokuapp.com/api/save', data)
      .subscribe(data=>{
          //go to next page;
      },error =>{
          console.log('Error');
      })

      console.log('You are Digital 201');
  }
  digital301(){
      var data: any = {
          type: 'Digital 301'
      }
      this.http.post('https://dumex.herokuapp.com/api/save', data)
      .subscribe(data=>{
          //go to next page;
      },error =>{
          console.log('Error');
      })
      console.log('You are Digital 301');
  }

}
