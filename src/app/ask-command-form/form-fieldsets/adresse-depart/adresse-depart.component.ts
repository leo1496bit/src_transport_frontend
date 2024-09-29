import { Component } from '@angular/core';
import { PageFormService } from '../../../services/page-form/page-form.service';

@Component({
  selector: 'app-adresse-depart',
  templateUrl: './adresse-depart.component.html',
  styleUrl: './adresse-depart.component.css'
})
export class AdresseDepartComponent {
  nextPage = '/ask-command-form/adresse-livraison';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }

}
