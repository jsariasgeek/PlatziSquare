import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {


  id:any = null;
  lugar:any = {};


  constructor(private route: ActivatedRoute, private lugaresService:LugaresService){
    this.id = this.route.snapshot.params['id'];
    this.lugaresService.getLugar(this.id).valueChanges().subscribe(
      lugar => {
        console.log('Este es el lugar');
        console.log(lugar);
        this.lugar = lugar;

      }
    )
  }

}
