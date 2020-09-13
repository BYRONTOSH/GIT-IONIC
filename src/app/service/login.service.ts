import { Injectable } from '@angular/core';



import { AngularFireAuth } from '@angular/fire/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: Facebook, private AFauth: AngularFireAuth) { }

  loginFacebook (){
    return this.fb.login(['email', 'public_profile'])
    .then((res: FacebookLoginResponse) =>{ 
    const cf = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    return this.AFauth.signInWithCredential(cf);
    })
    .catch(e => console.log('Error logging into Facebook', e));
  
  }

}
