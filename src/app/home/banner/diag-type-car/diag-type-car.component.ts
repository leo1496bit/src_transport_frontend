import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelUserService } from '../../../services/travel-user/travel-user.service';
import { TravelUser } from '../../../models/TravelUser';

@Component({
  selector: 'app-diag-type-car',
  templateUrl: './diag-type-car.component.html',
  styleUrl: './diag-type-car.component.css'
})
export class DiagTypeCarComponent implements OnInit {
 @Input() isOpen:boolean = false;
 @Output() isOpenChange = new EventEmitter<boolean>();
 @Input() distance:number=0;
 @Input() departure="";
 @Input() arrival="";
 price:number = 0;
 vehicleTypeForm = this.formBuilder.group({
  vehicleType:['berline'],
  userType:['particulier']
 })
 
 constructor(private router:Router, private formBuilder:FormBuilder, private travelUserService:TravelUserService){}
  ngOnInit(): void {
    
  }

 changeStateDialog(){
  this.isOpenChange.emit(!this.isOpen)
 }

 submit(event:Event){
  this.travelUserService.sendDataInfoVehicle(this.vehicleTypeForm,this.distance,this.departure,this.arrival);
  this.router.navigate(['/tarification-convoyage'])
  }
 }

