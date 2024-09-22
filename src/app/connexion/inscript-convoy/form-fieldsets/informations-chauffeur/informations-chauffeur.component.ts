import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informations-chauffeur',
  templateUrl: './informations-chauffeur.component.html',
  styleUrl: './informations-chauffeur.component.css'
})
export class InformationsChauffeurComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['/inscript-convoy/adresse-postale'])
  }
}
