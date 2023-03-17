import { Component } from '@angular/core';
import { CallSectionFormServiceService, Data } from '../call-section-form-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-call-me-section',
  templateUrl: './call-me-section.component.html',
  styleUrls: ['./call-me-section.component.css']
})
export class CallMeSectionComponent {
  msg = {
    isErr: false,
    msg: ''
  }
  email:string | undefined;
  name:string | undefined;
  tell:string | undefined;
  text:string | undefined;

  constructor(
    private checkForm:CallSectionFormServiceService,
    private http: HttpClient
    ){}

  callMeClick(){
    let data: Data = {
      email: this.email,
      name: this.name,
      tell: this.tell,
      text: this.text
    }
    this.msg = this.checkForm.chekData(data)
    if(this.msg.isErr){
      setTimeout(() => this.msg.isErr = false, 10000)
    } else{

        this.http.post<Data>('http://localhost:3000/', data, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }).subscribe(
          (response) => {                     
            this.msg.isErr = true      
            this.msg.msg = "Success"
            setTimeout(() => this.msg.isErr = false, 10000)

          },
          (error) => {                              
            this.msg.isErr = true      
            this.msg.msg = "error"
            alert("Error")
            setTimeout(() => this.msg.isErr = false, 10000)

      
            //throw error;   //You can also throw the error to a global error handler
          }
        );

    }
    return false
  }
}
