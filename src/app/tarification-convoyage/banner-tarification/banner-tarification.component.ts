import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-tarification',
  templateUrl: './banner-tarification.component.html',
  styleUrl: './banner-tarification.component.css'
})
export class BannerTarificationComponent {
  orderChange = true;
  reverse(){
    this.orderChange=!this.orderChange;
  }
}
