import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 2, distancia: 1.9, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 3, distancia: 5, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 1, distancia: 10, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 2, distancia: 35, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 1, distancia: 120, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 3, distancia: 10, nombre: 'Floreria la Gardenia', active:true},
    {cercania: 1, distancia: 10, nombre: 'Floreria la Ultima', active:false},
  ]

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(){

  }

  hacerAlgo(){
    alert('Hiciste Click');
  }

}
