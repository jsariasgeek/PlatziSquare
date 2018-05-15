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

 /* public getLugar(id){
    this.afDB.object('lugares/'+id).valueChanges().subscribe(lugar => {
      console.log('Este es el lugar: ')
      console.log(lugar);
      return lugar;
    });
  }*/

 public getLugar(id){
   return this.afDB.object('lugares/'+id);
   }

  public obtenerGeoData(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    console.log('Guardé en Firebase');
  }

  public editarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    console.log('Guardé en Firebase');
  }

  public eliminarLugar(lugar){
   let lugarABorrar = this.afDB.object('lugares/'+lugar.id);
   lugarABorrar.remove();
   console.log('Elimine el lugar');
  }

 }

/*

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;

  }
*/


