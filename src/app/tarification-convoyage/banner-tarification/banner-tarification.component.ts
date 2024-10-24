import { Component, EventEmitter, Output } from '@angular/core';
import { DistanceService } from '../../services/distance/distance.service';
import { FormBuilder } from '@angular/forms';
import { Point } from '../../models/point';
import { TravelUserService } from '../../services/travel-user/travel-user.service';
import { TravelUser } from '../../models/TravelUser';

@Component({
  selector: 'app-banner-tarification',
  templateUrl: './banner-tarification.component.html',
  styleUrl: './banner-tarification.component.css'
})
export class BannerTarificationComponent {
  constructor(private distanceService:DistanceService, private formBuilder:FormBuilder, private travelUserService:TravelUserService){}
  orderChange = true;
  startAddress:Point={lat:0,lon:0};
  endAddress:Point={lat:0,lon:0};
  distanceKm:number=0;
  departure="";
  arrival="";
  vehicleTypeForm = this.formBuilder.group({
    vehicleType:['berline'],
    userType:['particulier']
   })
   @Output() reloadSearch = new EventEmitter<TravelUser>();
  reverse(){
    this.orderChange=!this.orderChange;
  }
  placeSelected(dataInf:any){
    this.departure=this.distanceService.placeSelected(dataInf,this.startAddress);
  }
  checkIsNull(param:Point):boolean{
    return param.lat==0 && param.lon==0;
  }
  placeSelectedEnd(dataInf:any){
    this.arrival=this.distanceService.placeSelected(dataInf,this.endAddress);
  }
  submit(){
    this.distanceService.calculateDistance(this.startAddress,this.endAddress).subscribe(val=>{
      this.distanceKm=val;
      this.travelUserService.sendDataInfoVehicle(this.vehicleTypeForm,this.distanceKm,this.departure,this.arrival);
      this.reloadSearch.emit(this.travelUserService.getTravelUser())
    });
  }
}
