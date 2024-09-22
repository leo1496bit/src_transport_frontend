import { Component} from '@angular/core';
import { Router,IsActiveMatchOptions} from '@angular/router';

@Component({
  selector: 'app-form-progress',
  templateUrl: './form-progress.component.html',
  styleUrl: './form-progress.component.css'
})
export class FormProgressComponent {
  fieldsetsUrl:any[] = ['inscript-convoy/informations-chauffeur','inscript-convoy/adresse-postale']
  constructor(private route:Router){}

  isActive(url:string){
    console.log(this.route.isActive(url,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'}))
  return this.route.isActive(url,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'})
  }
  isFill(url:string){
    let active = this.fieldsetsUrl.find(it=> this.route.isActive(it,{matrixParams:"ignored",queryParams:"ignored",paths:'exact',fragment:'ignored'}))
    return this.fieldsetsUrl.indexOf(url)<this.fieldsetsUrl.indexOf(active);
  }
}
