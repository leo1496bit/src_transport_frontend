import { Injectable } from '@angular/core';
import { Point } from '../../models/point';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor() { }

  calculateDistance(startAddress:Point, endAddress:Point):Observable<number> {
    var origin1 = new google.maps.LatLng(startAddress.lat, startAddress.lon);;
    var destinationB = new google.maps.LatLng(endAddress.lat, endAddress.lon);
    var service = new google.maps.DistanceMatrixService();
    return new Observable((observer) => {
      service.getDistanceMatrix(
        {
          origins: [origin1],
          destinations: [destinationB],
          travelMode: google.maps.TravelMode.DRIVING,
          
        }, (response, status) => {
            observer.next((response?.rows[0].elements[0].distance.value)!/1000);
        });
    })
  }
  placeSelected(dataInf:any, address:Point){
    address.lat=dataInf?.properties.lat;
    address.lon=dataInf?.properties.lon;
    return dataInf?.properties.address_line1+ " " +dataInf?.properties.address_line2;
  }
}
