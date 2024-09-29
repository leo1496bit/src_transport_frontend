import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-informations-vehicule',
  templateUrl: './informations-vehicule.component.html',
  styleUrl: './informations-vehicule.component.css'
})
export class InformationsVehiculeComponent {
  previousPage = '/ask-command-form/adresse-livraison';
  nextPage = '/ask-command-form/plage-horaire-vehicule';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
