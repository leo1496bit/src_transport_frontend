import { Component} from '@angular/core';
import { Router,IsActiveMatchOptions} from '@angular/router';

@Component({
  selector: 'app-form-progress',
  templateUrl: './form-progress.component.html',
  styleUrl: './form-progress.component.css'
})
export class FormProgressComponent {
  fieldsetsUrl:any[] = ['inscript-convoy/informations-chauffeur','inscript-convoy/adresse-postale',
    'inscript-convoy/information','inscript-convoy/circulation', 'inscript-convoy/information-permis',
    'inscript-convoy/document-identite','inscript-convoy/document-professionnel', 'inscript-convoy/information-bancaire']
  constructor(private route:Router){}

  isActive(url:string){
  return this.route.isActive(url,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'})
  }
  isFill(url:string){
    let active = this.fieldsetsUrl.find(it=> this.route.isActive(it,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'}))
    return this.fieldsetsUrl.indexOf(url)<this.fieldsetsUrl.indexOf(active);
  }
}
