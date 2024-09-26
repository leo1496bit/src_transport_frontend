import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-information-permis',
  templateUrl: './information-permis.component.html',
  styleUrl: './information-permis.component.css'
})
export class InformationPermisComponent {
  previousPage = '/inscript-convoy/circulation';
  nextPage = '/inscript-convoy/document-identite';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
