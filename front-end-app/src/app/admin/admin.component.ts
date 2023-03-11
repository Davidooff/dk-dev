import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router'
import * as moment from "moment";

class QwerysUsers{
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  tell: string | undefined;
  text: string | undefined;
  processed: boolean | undefined;
  
}



class Qwerys{
  unProcessed = new Array<QwerysUsers>();
  processed = new Array<QwerysUsers>();

}

class User{
  login: string | undefined;
  password: string | undefined;
}

class serverLoginRes{
  idToken: string = '';
  exp: string = '';
}

var logined = false;
function getExpiration():any {
  const expiration = localStorage.getItem("expires_at");
  if(expiration){
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

export function isLoggedIn() {
  console.log(moment().isBefore(getExpiration()));
  if((Date.now() / 1000) < (Date.now() / 1000) + (60 * 60) * 3)
    return true
  else
    return false
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  logined = logined
  login: string | undefined;
  password: string | undefined;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}
  loginOnClick(){
    let data:User = {
      login: this.login,
      password: this.password
    } 
    this.http.post<serverLoginRes>('http://localhost:3000/login', data).subscribe((msg) => {
      console.log(msg);
      
      this.setSession(msg)
    });
  
  }

  private setSession(authResult:serverLoginRes) {
    if(authResult){
      if(authResult.idToken && authResult.exp){
        // const expiresAt = moment().add(authResult.exp,'second');
    
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(authResult.exp.valueOf()));
        logined = true;
        this.router.navigate(['logined'], { relativeTo: this.route });
      }
    }
}          

logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}



isLoggedOut() {
    return !isLoggedIn();
}

    
}
