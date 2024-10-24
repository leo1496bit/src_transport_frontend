import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelUserService } from '../services/travel-user/travel-user.service';
import { TravelUser } from '../models/TravelUser';

@Component({
  selector: 'app-tarification-convoyage',
  templateUrl: './tarification-convoyage.component.html',
  styleUrl: './tarification-convoyage.component.css'
})
export class TarificationConvoyageComponent implements OnInit {
  constructor(private route:ActivatedRoute, private traveUserService:TravelUserService){}
  type:any;
  price:any;
  data!:TravelUser;

  ngOnInit(): void {
    this.data= this.traveUserService.getTravelUser()!;
  }
  reload(newData:TravelUser):void{
    this.data=newData;
  }
}
