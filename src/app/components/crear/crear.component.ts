import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  planes:any = [
    {'db_name':'free', 'verbose_name':'Free'},
    {'db_name':'premium', 'verbose_name':'Premium'}
  ]

  lugar:any = {};


  constructor(private lugaresService:LugaresService) { }

  ngOnInit() {
  }

  guardarLugar(){
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert('Negocio guardado con éxito');
    this.lugar = {};
  }

}
