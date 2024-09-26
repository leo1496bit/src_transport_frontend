import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-information-bancaire',
  templateUrl: './information-bancaire.component.html',
  styleUrl: './information-bancaire.component.css'
})
export class InformationBancaireComponent {
  previousPage = '/inscript-convoy/document-professionnel';

  constructor(private pageForm:PageFormService){}
  submit(){
   
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
