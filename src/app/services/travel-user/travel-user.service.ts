import { Injectable } from '@angular/core';
import { TravelUser } from '../../models/TravelUser';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TravelUserService {
  private data?: TravelUser;
  constructor() { }

  setTravelUserData(userData: TravelUser) {
    this.data=userData;
  }
  getTravelUser():TravelUser|undefined {
    return this.data;
  }
  berlineHT(distance:number):number{
    if (distance >= 951) {
      return 0.63 * distance;
  } else if (distance >= 801 && distance <= 950) {
      return 0.67 * distance;
  } else if (distance >= 651 && distance <= 800) {
      return 0.71 * distance;
  } else if (distance >= 551 && distance <= 650) {
      return 0.75 * distance;
  } else if (distance >= 451 && distance <= 550) {
      return 0.79 * distance;
  } else if (distance >= 351 && distance <= 450) {
      return 0.83 * distance;
  } else if (distance >= 251 && distance <= 350) {
      return 0.92 * distance;
  } else if (distance >= 151 && distance <= 250) {
      return 1.00 * distance;
  } else if (distance >= 101 && distance <= 150) {
      return 1.08 * distance;
  } else if (distance >= 71 && distance <= 100) {
      return 1.55 * distance;
  } else if (distance >= 51 && distance <= 70) {
      return 1.67 * distance;
  } else if (distance >= 31 && distance <= 50) {
      return 1.82 * distance;
  } else if(distance >= 0 && distance <= 30) {
      return 58.33 * distance;
  } else return 0;
  }
  berlineTTC(distance:number):number{
    if (distance >= 951) {
      return 0.75 * distance;
  } else if (distance >= 801 && distance <= 950) {
      return 0.80 * distance;
  } else if (distance >= 651 && distance <= 800) {
      return 0.85 * distance;
  } else if (distance >= 551 && distance <= 650) {
      return 0.90 * distance;
  } else if (distance >= 451 && distance <= 550) {
      return 1.00 * distance;
  } else if (distance >= 351 && distance <= 450) {
      return 1.00 * distance;
  } else if (distance >= 251 && distance <= 350) {
      return 1.10 * distance;
  } else if (distance >= 151 && distance <= 250) {
      return 1.20 * distance;
  } else if (distance >= 101 && distance <= 150) {
      return 1.30 * distance;
  } else if (distance >= 71 && distance <= 100) {
      return 1.86 * distance;
  } else if (distance >= 51 && distance <= 70) {
      return 2.00 * distance;
  } else if (distance >= 31 && distance <= 50) {
      return 2.20 * distance;
  } else if(distance >= 0 && distance <= 30) {
      return 70.00 * distance;
  } else return 0;
  }
  utilitaireTTC(distance:number):number{
    if (distance >= 951) {
      return 0.85 * distance;
  } else if (distance >= 801 && distance <= 950) {
      return 0.90 * distance;
  } else if (distance >= 651 && distance <= 800) {
      return 0.95 * distance;
  } else if (distance >= 551 && distance <= 650) {
      return 1.00 * distance;
  } else if (distance >= 451 && distance <= 550) {
      return 1.10 * distance;
  } else if (distance >= 351 && distance <= 450) {
      return 1.15 * distance;
  } else if (distance >= 251 && distance <= 350) {
      return 1.25 * distance;
  } else if (distance >= 151 && distance <= 250) {
      return 1.40 * distance;
  } else if (distance >= 101 && distance <= 150) {
      return 1.45 * distance;
  } else if (distance >= 71 && distance <= 100) {
      return 2.20 * distance;
  } else if (distance >= 51 && distance <= 70) {
      return 2.30 * distance;
  } else if (distance >= 30 && distance <= 50) {
      return 2.50 * distance;
  } else if(distance >= 0 && distance <= 29) {
      return 70.00 * distance;
  } else return 0;
  }
  
utilitaireHT(distance:number):number{
  if (distance >= 951) {
    return 0.77 * distance;
} else if (distance >= 801 && distance <= 950) {
    return 0.81 * distance;
} else if (distance >= 651 && distance <= 800) {
    return 0.85 * distance;
} else if (distance >= 551 && distance <= 650) {
    return 0.89 * distance;
} else if (distance >= 451 && distance <= 550) {
    return 0.98 * distance;
} else if (distance >= 351 && distance <= 450) {
    return 1.03 * distance;
} else if (distance >= 251 && distance <= 350) {
    return 1.12 * distance;
} else if (distance >= 151 && distance <= 250) {
    return 1.25 * distance;
} else if (distance >= 101 && distance <= 150) {
    return 1.30 * distance;
} else if (distance >= 71 && distance <= 100) {
    return 1.98 * distance;
} else if (distance >= 51 && distance <= 70) {
    return 2.08 * distance;
} else if (distance >= 30 && distance <= 50) {
    return 2.27 * distance;
} else if(distance >= 0 && distance <= 29) {
    return 57.85 * distance;
} else return 0;
}
electriqueHT(distance:number):number{
  if (distance >= 951) {
    return 0.80 * distance;
} else if (distance >= 801 && distance <= 950) {
    return 0.75 * distance;
} else if (distance >= 651 && distance <= 800) {
    return 0.80 * distance;
} else if (distance >= 551 && distance <= 650) {
    return 0.90 * distance;
} else if (distance >= 451 && distance <= 550) {
    return 0.95 * distance;
} else if (distance >= 351 && distance <= 450) {
    return 1.00 * distance;
} else if (distance >= 251 && distance <= 350) {
    return 1.10 * distance;
} else if (distance >= 151 && distance <= 250) {
    return 1.20 * distance;
} else if (distance >= 101 && distance <= 150) {
    return 1.30 * distance;
} else if (distance >= 71 && distance <= 100) {
    return 1.70 * distance;
} else if (distance >= 51 && distance <= 70) {
    return 1.80 * distance;
} else if (distance >= 31 && distance <= 50) {
    return 1.90 * distance;
} else if (distance >= 0 && distance <= 30) {
    return 80.00 * distance;
} else return 0;
}
electriqueTTC(distance: number): number {
  if (distance >= 951) {
    return 0.96 * distance;
} else if (distance >= 801 && distance <= 950) {
    return 0.90 * distance;
} else if (distance >= 651 && distance <= 800) {
    return 0.96 * distance;
} else if (distance >= 551 && distance <= 650) {
    return 1.08 * distance;
} else if (distance >= 451 && distance <= 550) {
    return 1.14 * distance;
} else if (distance >= 351 && distance <= 450) {
    return 1.20 * distance;
} else if (distance >= 251 && distance <= 350) {
    return 1.32 * distance;
} else if (distance >= 151 && distance <= 250) {
    return 1.44 * distance;
} else if (distance >= 101 && distance <= 150) {
    return 1.56 * distance;
} else if (distance >= 71 && distance <= 100) {
    return 2.04 * distance;
} else if (distance >= 51 && distance <= 70) {
    return 2.16 * distance;
} else if (distance >= 31 && distance <= 50) {
    return 2.28 * distance;
} else if (distance >= 0 && distance <= 30) {
    return 96.00 * distance;
} 
else return 0;
}
sendDataInfoVehicle(vehicleTypeForm:FormGroup,distance:number, departure:string, arrival:string){
  let price =0;
  if(vehicleTypeForm.controls["userType"].value=="societe" && vehicleTypeForm.controls["vehicleType"].value=="berline")
    price=this.berlineHT(distance);
  else if(vehicleTypeForm.controls["userType"].value=="particulier" && vehicleTypeForm.controls["vehicleType"].value=="berline")
    price=this.berlineTTC(distance);
  else if(vehicleTypeForm.controls["userType"].value=="societe" && vehicleTypeForm.controls["vehicleType"].value=="utilitaire")
    price=this.utilitaireHT(distance);
  else if(vehicleTypeForm.controls["userType"].value=="particulier" && vehicleTypeForm.controls["vehicleType"].value=="utilitaire")
    price=this.utilitaireTTC(distance);
  else if(vehicleTypeForm.controls["userType"].value=="societe" && vehicleTypeForm.controls["vehicleType"].value=="electrique")
    price=this.electriqueHT(distance);
  else if(vehicleTypeForm.controls["userType"].value=="particulier" && vehicleTypeForm.controls["vehicleType"].value=="electrique")
    price=this.electriqueTTC(distance);
  let imageSMap =new Map<string,string>();
  imageSMap.set("berline","assets/images/car6.png");
  imageSMap.set("utilitaire","assets/images/car2.png");
  imageSMap.set("electrique","assets/images/car7.PNG");
  let data:TravelUser={
    price:Math.round(price*100)/100, 
    vehiculeType:vehicleTypeForm.controls["vehicleType"].value!,
    userType:vehicleTypeForm.controls["userType"].value!,
    departure:departure,
    arrival:arrival,
    imageCar:imageSMap.get(vehicleTypeForm.controls["vehicleType"].value!)!
  }
  this.setTravelUserData(data);
}
}
