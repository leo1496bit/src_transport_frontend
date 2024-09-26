import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-adresse-siege-social',
  templateUrl: './adresse-siege-social.component.html',
  styleUrl: './adresse-siege-social.component.css'
})
export class AdresseSiegeSocialComponent {
  previousPage = '/inscript-client/informations-chauffeur';

  constructor(private pageForm:PageFormService){}
  submit(){
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
