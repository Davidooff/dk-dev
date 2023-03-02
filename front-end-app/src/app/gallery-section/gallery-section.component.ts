import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})

export class GallerySectionComponent{
  URL = "http://localhost:4200/assets/gallery"
  marginLeft = -1024;
  maxMargin!:number;
  isUsed = false
  gallerySliderLinks = [0, 1, 2];
  quantity: number = 0;
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    this.httpClient.get(this.URL + '/quantity.json').subscribe((el:any) => { 
      this.quantity = el.quantity 
      this.maxMargin = (this.quantity - 1) * -1024;
    });
    
  }
    move(direction:string){
      if(!this.isUsed){
        for(let i = 3; i < this.quantity; i++){
          this.gallerySliderLinks[i] = i;
        }
      }
      
      if(direction == 'left'){
        if(this.marginLeft >= 0){
          this.marginLeft = this.maxMargin;
        } else{
          this.marginLeft += 1024;
        }
      } 
      else if(direction == 'right'){
        if(this.marginLeft <= this.maxMargin){
          this.marginLeft = 0;
        } else{
          this.marginLeft -= 1024;
        }
      }
    }
  }

