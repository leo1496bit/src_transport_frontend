import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isChecked: boolean = false;
  open=false;

  toggle(){
    this.open=!this.open;
  }
  test(){
    console.log('test')
  }

}
