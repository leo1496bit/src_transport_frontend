import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opinion-item',
  templateUrl: './opinion-item.component.html',
  styleUrl: './opinion-item.component.css'
})
export class OpinionItemComponent{
  @Input() content!: string;
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() star!:number;

  numSequence(): Array<number> { 
    return Array(this.star); 
  } 
  numSequenceN(n:number): Array<number> { 
    return Array(n); 
  } 
  empty(){
    return 5-this.star;
  }
}
