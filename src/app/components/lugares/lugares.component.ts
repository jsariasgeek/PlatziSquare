import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'PlatziSquare';


  lat = 4.813179;
  lng = -75.6909575;

  lugares = null;

  constructor(private  lugaresService: LugaresService) {
    lugaresService.getLugares().valueChanges().subscribe(
      lugares => {
        console.log('Estos son los lugares: ');
        console.log(lugares);
        this.lugares = lugares;
      }
    );
  }


  hacerAlgo() {
    alert('Hiciste Click');
  }

  ngOnInit() {
  }

  eliminarLugar(id) {
    console.log('Voy a eliminar el lugar: ' + id);
    this.lugaresService.getLugar(id).valueChanges().subscribe(
      lugar => {
        this.lugaresService.eliminarLugar(lugar);
      }
    );
  }

}


