import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-adresse-livraison',
  templateUrl: './adresse-livraison.component.html',
  styleUrl: './adresse-livraison.component.css'
})
export class AdresseLivraisonComponent {
  previousPage = '/ask-command-form/adresse-depart';
  nextPage = '/ask-command-form/informations-vehicule';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
