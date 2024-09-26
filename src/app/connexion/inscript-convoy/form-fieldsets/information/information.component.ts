import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  previousPage = '/inscript-convoy/adresse-postale';
  nextPage = '/inscript-convoy/circulation';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
