import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class LugaresService{


  constructor(private afDB:AngularFireDatabase){}

  public getLugares(){
   return this.afDB.list('lugares/');
  }
/*

  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;

  }
*/

  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    console.log('Guardé en Firebase');
  }





}
