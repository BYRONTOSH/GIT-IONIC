import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: LoginService, public router: Router) { }

  ngOnInit() {
  }

  loginFace(){
    
    this.auth.loginFacebook().then(r=>{
      this.router.navigate(['/tabs/tab1']);
    }).catch(e=>{
      console.log("ERROR");
    })
  }

}
