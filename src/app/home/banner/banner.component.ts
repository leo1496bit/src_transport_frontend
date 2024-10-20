import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  ngOnInit(): void {
   
  }
  open:boolean = false; 
  orderChange = true;
  langage:string='';

  

  @HostListener('submit',['$event'])
  submit(event:Event){
    event.preventDefault();
    this.open=true;
  }
  reverse(){
    this.orderChange=!this.orderChange;
  }
  placeSelected(event:any){
    console.log(event)
  }
}
