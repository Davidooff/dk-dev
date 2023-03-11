import { Component } from '@angular/core';
import { isLoggedIn } from "../admin.component"
import { HttpClient } from '@angular/common/http';

class Customer{
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  tell: string | undefined;
  text: string | undefined;
  processed: boolean | undefined;
  __v: number | undefined;
  date:string | undefined;
  comments = new Array<[String, String]>();
}

class Req{
  token: string | null = null;
  startFrom: number | undefined;
  quantity: number | undefined;
}


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customerInfo: Customer | undefined;
  customers: [Customer]  | undefined;
  constructor(private http: HttpClient){}
  getData(){
    let req: Req = {
      token: localStorage.getItem("id_token"),
      startFrom: 0,
      quantity: 10
    }
    if(!isLoggedIn()){
      alert('Login exp')
    } else {
      
      this.http.post<[Customer]>('http://localhost:3000/get-db-data', req).subscribe((msg) => {        
        this.customers = msg
      })
    }
  }

  getDataAboutCustomer(id:string | undefined){
    if(id){
      let req = {
        _id: id,
        token: localStorage.getItem("id_token")
      }
      this.http.post<Customer>('http://localhost:3000/get-customer-data', req).subscribe((msg) => {        
        this.customerInfo = msg
      })
    }
    console.log(this.customerInfo);
    
  }
  
}
