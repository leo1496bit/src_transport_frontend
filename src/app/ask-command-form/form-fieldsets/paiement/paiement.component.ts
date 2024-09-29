import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {
  previousPage = '/ask-command-form/prestations-supplementaires';
  constructor(private pageForm:PageFormService){}
  submit(){

  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
