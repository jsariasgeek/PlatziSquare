import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class LugaresService{
  lugares:any = [
    {id:1, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:2, cercania: 1, distancia: 1, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:3, cercania: 2, distancia: 1.9, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:4, cercania: 3, distancia: 5, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:5, cercania: 1, distancia: 10, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'free', active:true},
    {id:6, cercania: 2, distancia: 35, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:7, cercania: 1, distancia: 120, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'free', active:true},
    {id:8, cercania: 3, distancia: 10, nombre: 'Floreria la Gardenia', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:true},
    {id:9, cercania: 1, distancia: 10, nombre: 'Floreria la Ultima', descripcion:'Esta es una breve descripción, más adelante tendremos más información.', plan:'premium', active:false},
  ];

  constructor(private afDB:AngularFireDatabase){}

  public getLugares(){
    return this.lugares;
  }

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;

  }

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    console.log('Guardé en Firebase');
  }





}
