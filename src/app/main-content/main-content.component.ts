import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  ImagePath: string;
  ImagePath2: string;
  ImagePath3: string;
  ImagePath4: string;
  ImagePath5: string;
  ImagePath6: string;
  ImagePath7: string;
  ImagePath8: string;
  ImagePath9: string;
  ImagePath10: string;

  greet: string;
  title = 'project-form';
  currentDate = new Date();
  currentDay = this.currentDate.getDay();
  arr = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']
  day = this.arr[this.currentDay]
  hrs = this.currentDate.getHours();
    
  constructor() {
    this.ImagePath = '/assets/images/small-logo.png'
    this.ImagePath2 = '/assets/images/office.jpg'
    this.ImagePath3 = '/assets/images/word_logo.png'
    this.ImagePath4 = '/assets/images/pdf_logo.jpg'
    this.ImagePath5 = '/assets/images/logo_time.png'
    this.ImagePath6 = '/assets/images/employee-logo.JPG'
    this.ImagePath7 = '/assets/images/image_gallery.png'
    this.ImagePath8 = '/assets/images/team2.png'
    this.ImagePath9 = '/assets/images/office2.jpg'
    this.ImagePath10 = '/assets/images/office3.jpg'
    this.greet=''
    if (this.hrs < 12) {
      this.greet = 'Good Morning'
    }
    else if (this.hrs >= 12 && this.hrs <= 17) {
      this.greet = 'Good Afternoon'
    }
    else if (this.hrs >= 17 && this.hrs <= 24) {
      this.greet = 'Good Evening'
    }
    
  }
  ngOnInit(): void {
  }

}
