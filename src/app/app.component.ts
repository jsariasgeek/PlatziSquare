import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  disabled = true;

  constructor(){
    setTimeout(()=>{this.disabled=false},3000)
  }

}
