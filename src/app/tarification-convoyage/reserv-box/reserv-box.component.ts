import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reserv-box',
  templateUrl: './reserv-box.component.html',
  styleUrl: './reserv-box.component.css'
})
export class ReservBoxComponent {
  @Input() type!:string;
  @Input() priceHT!:number;
  @Input() priceTTC!:number;
  @Input() urlImg!:string;
}
