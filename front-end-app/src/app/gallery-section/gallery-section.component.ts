import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})

export class GallerySectionComponent{
  URL = "http://localhost:4200/assets/gallery"
  screan!:number;
  marginLeft!:number;
  maxMargin!:number;
  isUsed = false
  gallerySliderLinks = [0, 1, 2];
  quantity: number = 0;
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    if(window.innerWidth < 1024){
      this.screan = -window.innerWidth * 0.75;
      this.marginLeft = this.screan;
      console.log(this.screan);
      
    }else{
      this.screan = -960
      this.marginLeft = this.screan;
    }
    this.httpClient.get(this.URL + '/quantity.json').subscribe((el:any) => { 
      this.quantity = el.quantity 
      this.maxMargin = (this.quantity - 1) * this.screan;
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
          this.marginLeft -= this.screan;
        }
      } 
      else if(direction == 'right'){
        if(this.marginLeft <= this.maxMargin){
          this.marginLeft = 0;
        } else{
          this.marginLeft += this.screan;
        }
      }
    }
  }

