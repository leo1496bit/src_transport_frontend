import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flash-inf',
  templateUrl: './flash-inf.component.html',
  styleUrl: './flash-inf.component.css'
})
export class FlashInfComponent {
  @Input() title!:string;
  @Input() imageUrl!:string;
}
