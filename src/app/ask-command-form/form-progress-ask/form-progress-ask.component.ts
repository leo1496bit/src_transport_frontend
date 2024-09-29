import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-progress-ask',
  templateUrl: './form-progress-ask.component.html',
  styleUrl: './form-progress-ask.component.css'
})
export class FormProgressAskComponent {
  fieldsetsUrl:any[] = ['ask-command-form/adresse-depart','ask-command-form/adresse-livraison',
    'ask-command-form/informations-vehicule','ask-command-form/plage-horaire-vehicule',
    'ask-command-form/informations-client','ask-command-form/prestations-supplementaires','ask-command-form/paiement'];
    @Input() fieldInfo!:boolean;
    @Output() fieldInfoChange = new EventEmitter<boolean>();
  constructor(private route:Router){}

  isActive(url:string){
  return this.route.isActive(url,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'})
  }
  isFill(url:string){
    let active = this.fieldsetsUrl.find(it=> this.route.isActive(it,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'}))
    return this.fieldsetsUrl.indexOf(url)<this.fieldsetsUrl.indexOf(active);
  }
  isChangeField(){
    if(this.isActive('ask-command-form/prestations-supplementaires') || this.isActive('ask-command-form/paiement')){
      this.fieldInfo=!this.fieldInfo;
      this.fieldInfoChange.emit(this.fieldInfo)
    }
    return true;
  }
}
