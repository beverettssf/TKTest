import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { LobbyPage } from './../lobby/lobby'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public AppUser: AppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  signupForm(form) { 
      if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.AppUser.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      // handle successful responses and decide what happens next
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
       alert("Please register again.");
      }
      // inform the user of any known problems that arose, otherwise give a generic
      // failed message
      //  if(error ) then 404: not found
      // 422: email is already taken
      // (response.data === null): user is offline
      // 500: the world has ended, or the server just isn’t online.

    );

 }

}
