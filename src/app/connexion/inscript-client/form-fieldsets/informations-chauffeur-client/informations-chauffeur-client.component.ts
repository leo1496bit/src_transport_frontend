import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-informations-chauffeur-client',
  templateUrl: './informations-chauffeur-client.component.html',
  styleUrl: './informations-chauffeur-client.component.css'
})
export class InformationsChauffeurClientComponent {
 
  nextPage = '/inscript-client/adresse-siege-social';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
}
