import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-document-professionnel',
  templateUrl: './document-professionnel.component.html',
  styleUrl: './document-professionnel.component.css'
})
export class DocumentProfessionnelComponent {
  previousPage = '/inscript-convoy/document-identite';
  nextPage = '/inscript-convoy/information-bancaire';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
