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

  chekData(data: Data): [string, boolean]{
    if(!data.email){
      return ['Pls enter email', true]
    } else if(!EMAIL_REGEXP.test(data.email)){
      return ['Pls enter corect email', true]
    } else if(!data.name){
      return ['Pls enter name', true]
    } else if(data.name.length < 2 || (/\d/.test(data.name))){ // /\d/.test(data.name) - search for digts in name by regex
      return ['Pls enter corect name', true]
    } else if(!data.tell){
      return ['Pls enter tell', true]
    } else if(TELL_REGEXP.test(data.tell)){
      return ['Pls enter corect tell', true]
    }
    return ['ok', false]
  }
}
