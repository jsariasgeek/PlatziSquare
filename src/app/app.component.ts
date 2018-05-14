import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Gardenia', active:true},
    {nombre: 'Floreria la Ultima', active:false},
  ]

  constructor(){

  }

  hacerAlgo(){
    alert('Hiciste Click');
  }

}
