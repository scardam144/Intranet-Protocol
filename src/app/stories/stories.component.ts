import { Component, OnInit,  ElementRef } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  
  Photobox: boolean=false;
  Videobox: boolean=false;
  borderColor: any;
  noborderColor: any;
  IndependenceBox: boolean=false;
  AnnualdayBox: boolean=false;

  AnnualdayFunction(){
    this.AnnualdayBox = !this.AnnualdayBox; 
    }
  IndependenceFunction(){
    this.IndependenceBox = !this.IndependenceBox; 
    }
  PhotoboxFunction(){
      if (this.Videobox = true){
      this.Videobox = !this.Videobox;
      
      this.Photobox = !this.Photobox;
      this.borderColor = 'solid 4px #f74288';
      this.noborderColor = 'none';
      let style: string = `
      .test {
             border-bottom :${this.borderColor}; }
      .tes {
             border-bottom :${this.noborderColor}; }
     `;
      
     this.createStyle(style);
      }
      
      else{
        this.Photobox = !this.Photobox;
        this.borderColor = 'solid 4px #f74288';
        let style: string = `
        .test {
               border-bottom :${this.borderColor}; }
       `;
        
       this.createStyle(style);
      }
      
  }
  VideoboxFunction(){
    if (this.Photobox = true){
    this.Photobox = !this.Photobox;
    this.Videobox = !this.Videobox;
    this.borderColor = 'solid 4px #f74288';
    this.noborderColor = 'none';
    let style: string = `
      .tes {
             border-bottom :${this.borderColor}; }
      .test {
             border-bottom :${this.noborderColor}; }
     `;
      
     this.createStyle(style);
    }
    else{
      this.Videobox = !this.Videobox;
      this.borderColor = 'solid 4px #f74288';
      let style: string = `
        .tes {
               border-bottom :${this.borderColor}; }
       `;
        
       this.createStyle(style);
    }

  }
 
  textColor = 'black';
  constructor(private el: ElementRef) {
   }

   ngOnInit() {
    
  }

  createStyle(style: string): void {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(styleElement);
  }

}
