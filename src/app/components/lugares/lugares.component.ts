import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {AutorizacionService} from '../../services/autorizacion.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations:[
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        /*backgroundColor:'green',
        transform:'rotate3d(0,0,0, 0deg)'*/
      })),
      state('final', style({
        opacity: 1,
        /*backgroundColor:'yellow',
        transform:'rotate3d(5,10,20, 30deg)'*/
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),

    ])
  ]
})
export class LugaresComponent implements OnInit {

  title = 'PlatziSquare';

  state = 'inicial';
  lat = 4.813179;
  lng = -75.6909575;




  lugares = null;
  mostrarError = false;
  mensajeError = null;
  loggedIn=false

  constructor(private  lugaresService: LugaresService, private autorizacionService:AutorizacionService) {


      this.autorizacionService.isLogged().subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn = true;
        }
        else{
          this.loggedIn = false;
        }
      }, (error)=>{
        this.loggedIn = false;
      })


    lugaresService.getLugares().valueChanges().subscribe(
      lugares => {

        console.log('Estos son los lugares: ');
        console.log(lugares);
        this.lugares = lugares;
        this.state = 'final';
      }, error =>{
        console.log(error);
      }
    );
  }

  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia($event){
    console.log($event);
    console.log('Iniciado');
  }

  animacionTermina(e){
    console.log(e);
    console.log('Terminado');
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


