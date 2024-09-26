import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-progress-client',
  templateUrl: './form-progress-client.component.html',
  styleUrl: './form-progress-client.component.css'
})
export class FormProgressClientComponent {
  fieldsetsUrl:any[] = ['inscript-client/informations-chauffeur','inscript-client/adresse-siege-social']
  constructor(private route:Router){}

  isActive(url:string){
  return this.route.isActive(url,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'})
  }
  isFill(url:string){
    let active = this.fieldsetsUrl.find(it=> this.route.isActive(it,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'}))
    return this.fieldsetsUrl.indexOf(url)<this.fieldsetsUrl.indexOf(active);
  }
}
