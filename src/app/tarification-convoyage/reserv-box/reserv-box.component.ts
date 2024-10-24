import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserv-box',
  templateUrl: './reserv-box.component.html',
  styleUrl: './reserv-box.component.css'
})
export class ReservBoxComponent {
  @Input() type!:string;
  @Input() userType!:string;
  @Input() priceHT!:number;
  @Input() priceTTC!:number;
  @Input() urlImg!:string;
  @Input() departure!:string;
  @Input() arrival!:string;
  constructor(
    private router:Router
  ){}

  onReserv(){
    this.router.navigate(['/ask-command-form/adresse-depart']);
  }
}
