import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-prestatiions-supplementaires',
  templateUrl: './prestatiions-supplementaires.component.html',
  styleUrl: './prestatiions-supplementaires.component.css'
})
export class PrestatiionsSupplementairesComponent {
  previousPage = '/ask-command-form/informations-client';
  nextPage = '/ask-command-form/paiement';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
