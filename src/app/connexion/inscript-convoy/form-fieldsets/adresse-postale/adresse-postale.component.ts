import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-adresse-postale',
  templateUrl: './adresse-postale.component.html',
  styleUrl: './adresse-postale.component.css'
})
export class AdressePostaleComponent {
  previousPage = '/inscript-convoy/informations-chauffeur';
  nextPage = '/inscript-convoy/information';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
