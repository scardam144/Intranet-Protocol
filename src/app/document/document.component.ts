import { Component, ViewChild, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  ImagePath4: string;
  ImagePath3: string;
  fileSaver: any;
  require: any;
  number: string;
  borderColor: any;
  noborderColor: any;

  Documentbox: boolean=false;
  Documentbox1: boolean=false;
   
  


  ngOnInit() {
  }
  DocumentboxFunction(){
    if (this.Documentbox1 = true){
      this.Documentbox1 = !this.Documentbox1;
      this.Documentbox = !this.Documentbox;
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
        this.Documentbox = !this.Documentbox;
        this.borderColor = 'solid 4px #f74288';
        let style: string = `
        .test {
               border-bottom :${this.borderColor}; }
       `;
        
       this.createStyle(style);
      }
  }
  Documentbox1Function(){
    if (this.Documentbox = true){
    this.Documentbox = !this.Documentbox;
    this.Documentbox1 = !this.Documentbox1;
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
      this.Documentbox1 = !this.Documentbox1;
      this.borderColor = 'solid 4px #f74288';
      let style: string = `
        .tes {
               border-bottom :${this.borderColor}; }
       `;
        
       this.createStyle(style);
      
    }

  }

  downloadPdf() {
    const pdfSource =  "/assets/files/file_name.pdf";
    const pdfName = "Template- Project Docs";
    FileSaver.saveAs(pdfSource, pdfName);
  }
  openDoc() {
    const pdfSource =  "/assets/files/file_name.pdf";
    window.open(pdfSource, '');
  }
  textColor = 'black';
  constructor(private el: ElementRef) {
    this.ImagePath4 = '/assets/images/pdf_logo.jpg'
    this.ImagePath3 = '/assets/images/word_logo.png'
   
    this.number = 'border-bottom: 4px solid #ff675a;'
  
   }
   createStyle(style: string): void {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(styleElement);
  }

  
  
}
