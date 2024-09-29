import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-informations-client',
  templateUrl: './informations-client.component.html',
  styleUrl: './informations-client.component.css'
})
export class InformationsClientComponent {
  previousPage = '/ask-command-form/plage-horaire-vehicule';
  nextPage = '/ask-command-form/prestations-supplementaires';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
