import { Component, HostListener, OnInit} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { DistanceService } from '../../services/distance/distance.service';
import { Point } from '../../models/point';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  constructor(private distanceService:DistanceService){}
  ngOnInit(): void {
   
  }
  open:boolean = false; 
  orderChange = true;
  startAddress:Point={lat:0,lon:0};
  endAddress:Point={lat:0,lon:0};
  distanceKm:number=0;
  departure="";
  arrival="";
  

  @HostListener('submit',['$event'])
  submit(event:Event){
    event.preventDefault();
    this.open=true;
  }
  checkIsNull(param:Point):boolean{
    return param.lat==0 && param.lon==0;
  }
  reverse(){
    this.orderChange=!this.orderChange;
  }
  placeSelected(dataInf:any){
    this.departure = this.distanceService.placeSelected(dataInf,this.startAddress);
  }
  placeSelectedEnd(dataInf:any){
    this.arrival = this.distanceService.placeSelected(dataInf,this.endAddress);
  }
  calculateDistance(){
    this.distanceService.calculateDistance(this.startAddress,this.endAddress).subscribe(val=>this.distanceKm=val);
  }
}
