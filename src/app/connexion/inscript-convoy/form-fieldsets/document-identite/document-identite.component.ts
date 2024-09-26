import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-document-identite',
  templateUrl: './document-identite.component.html',
  styleUrl: './document-identite.component.css'
})
export class DocumentIdentiteComponent {
  previousPage = '/inscript-convoy/information-permis';
  nextPage = '/inscript-convoy/document-professionnel';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
