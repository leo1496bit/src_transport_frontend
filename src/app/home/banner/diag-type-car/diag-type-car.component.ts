import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diag-type-car',
  templateUrl: './diag-type-car.component.html',
  styleUrl: './diag-type-car.component.css'
})
export class DiagTypeCarComponent {
 @Input() isOpen:boolean = false;
 @Output() isOpenChange = new EventEmitter<boolean>();
 constructor(private router:Router){}

 changeStateDialog(){
  this.isOpenChange.emit(!this.isOpen)
 }

 submit(event:Event){
  event.preventDefault();
  this.router.navigate(['/tarification-convoyage'])
 }
}
