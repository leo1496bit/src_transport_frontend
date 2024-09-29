import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-car-ask',
  templateUrl: './form-field-car-ask.component.html',
  styleUrl: './form-field-car-ask.component.css'
})
export class FormFieldCarAskComponent {
  @Input() fieldInfo:boolean = true;
}
