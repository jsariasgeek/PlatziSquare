import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LugaresService{


  constructor(private afDB:AngularFireDatabase, private http:HttpClient){}

  public getLugares(){
   return this.afDB.list('lugares/');
  }
/*

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;

  }
*/

  public obtenerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    console.log('Guardé en Firebase');
  }





}
