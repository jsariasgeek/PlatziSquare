import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {

  lugares:any = [
    {id:1, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:2, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:3, cercania: 2, distancia: 1.9, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:4, cercania: 3, distancia: 5, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:5, cercania: 1, distancia: 10, nombre: 'Floreria la Gardenia', plan:'free', active:true, descripcion:'Pronto tendremos mas información'},
    {id:6, cercania: 2, distancia: 35, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:7, cercania: 1, distancia: 120, nombre: 'Floreria la Gardenia', plan:'free', active:true, descripcion:'Pronto tendremos mas información'},
    {id:8, cercania: 3, distancia: 10, nombre: 'Floreria la Gardenia', plan:'premium', active:true, descripcion:'Pronto tendremos mas información'},
    {id:9, cercania: 1, distancia: 10, nombre: 'Floreria la Ultima', plan:'premium', active:false descripción:'Pronto tendremos más información'},
  ]

  id = null;
  lugar:any = null;

  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
    this.lugar = this.buscarLugar()
  }

  buscarLugar(){
    return this.lugares.filter((lugar)=>{return lugar.id == this.id})[0] || null;
  }
}
