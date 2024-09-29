import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-plage-horaire-vehicule',
  templateUrl: './plage-horaire-vehicule.component.html',
  styleUrl: './plage-horaire-vehicule.component.css'
})
export class PlageHoraireVehiculeComponent {
  previousPage = '/ask-command-form/informations-vehicule';
  nextPage = '/ask-command-form/informations-client';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
