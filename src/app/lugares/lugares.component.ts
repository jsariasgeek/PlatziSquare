import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'PlatziSquare';
  lugares:any = [
    {id:1, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:2, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:3, cercania: 2, distancia: 1.9, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:4, cercania: 3, distancia: 5, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:5, cercania: 1, distancia: 10, nombre: 'Floreria la Gardenia', plan:'free', active:true},
    {id:6, cercania: 2, distancia: 35, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:7, cercania: 1, distancia: 120, nombre: 'Floreria la Gardenia', plan:'free', active:true},
    {id:8, cercania: 3, distancia: 10, nombre: 'Floreria la Gardenia', plan:'premium', active:true},
    {id:9, cercania: 1, distancia: 10, nombre: 'Floreria la Ultima', plan:'premium', active:false},
  ]

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }


  hacerAlgo(){
    alert('Hiciste Click');
  }

  ngOnInit() {
  }

}


