import { Injectable } from '@angular/core';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const TELL_REGEXP = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

export class Data {
  email: string | undefined;
  name: string | undefined;
  tell: string | undefined;
  text: string | undefined;
}
@Injectable({
  providedIn: 'root'
})
export class CallSectionFormServiceService {
  
  constructor() { }

  chekData(data: Data): {msg:string, isErr:boolean}{
    if(!data.email){
      return {msg: 'Pls enter email', isErr: true}
    } else if(!EMAIL_REGEXP.test(data.email)){
      return {msg: 'Pls enter corect email', isErr: true}
    } else if(!data.name){
      return {msg: 'Pls enter name', isErr: true}
    } else if(data.name.length < 2 || (/\d/.test(data.name))){ // /\d/.test(data.name) - search for digts in name by regex
      return {msg: 'Pls enter corect name', isErr: true}
    } else if(!data.tell){
      return {msg: 'Pls enter tell', isErr: true}
    } else if(TELL_REGEXP.test(data.tell)){
      return {msg: 'Pls enter corect tell', isErr: true}
    }
    return {msg: '', isErr: false}
  }
}
