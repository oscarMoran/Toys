import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  public currentDate : any;
  constructor() {
    this.currentDate = new Date();
   }

  ngOnInit() {
  }

}
