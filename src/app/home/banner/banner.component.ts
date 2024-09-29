import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  open:boolean = false; 

  @HostListener('submit',['$event'])
  submit(event:Event){
    event.preventDefault();
    this.open=true;
  }

}
