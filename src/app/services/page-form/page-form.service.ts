import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageFormService {

  constructor(private router:Router) { }
  changeTo(url:string){
    this.router.navigate([url])
  }
}
