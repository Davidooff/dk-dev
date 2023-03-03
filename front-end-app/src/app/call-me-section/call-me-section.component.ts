import { Component } from '@angular/core';
import { CallSectionFormServiceService, Data } from '../call-section-form-service.service';

@Component({
  selector: 'app-call-me-section',
  templateUrl: './call-me-section.component.html',
  styleUrls: ['./call-me-section.component.css']
})
export class CallMeSectionComponent {
  email:string | undefined;
  name:string | undefined;
  tell:string | undefined;
  text:string | undefined;

  constructor(private checkForm:CallSectionFormServiceService){}

  callMeClick(){
    let data: Data = {
      email: this.email,
      name: this.name,
      tell: this.tell,
      text: this.text
    }
    let temp:[string, boolean] = this.checkForm.chekData(data)
    console.log(temp);
    return false
  }
}
