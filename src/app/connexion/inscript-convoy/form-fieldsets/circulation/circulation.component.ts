import { Component } from '@angular/core';
import { PageFormService } from '../../../../services/page-form/page-form.service';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.css'
})
export class CirculationComponent {
  previousPage = '/inscript-convoy/information';
  nextPage = '/inscript-convoy/information-permis';
  constructor(private pageForm:PageFormService){}
  next(){
   this.pageForm.changeTo(this.nextPage)
  }
  previous(){
    this.pageForm.changeTo(this.previousPage);
  }
}
