import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from './../results/results';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  //tests = [];
  tests: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
    this.tests=JSON.parse(window.localStorage.getItem("tests")) || [];
    console.log(this.tests);
  }

  goToResult(test){
    this.navCtrl.push(ResultsPage, { 
        test: test,
        //not sure:
        showHome: false
    });
  }
}
