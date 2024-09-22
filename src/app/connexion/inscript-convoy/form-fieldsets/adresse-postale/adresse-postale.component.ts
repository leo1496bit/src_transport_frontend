import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adresse-postale',
  templateUrl: './adresse-postale.component.html',
  styleUrl: './adresse-postale.component.css'
})
export class AdressePostaleComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inscript-convoy/adresse-postale'])
  }
  previous(){
    this.router.navigate(['/inscript-convoy/informations-chauffeur'])
  }
}
