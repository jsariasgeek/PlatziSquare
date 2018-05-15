import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import {ActivatedRoute} from '@angular/router';

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
  palabra:any = null;
  breadPalabra:any = null;

  constructor(private route: ActivatedRoute,private lugaresService:LugaresService) {
    this.id = this.route.snapshot.params['id'];
    console.log('Este es el id: '+this.id);
    if(this.id == 'new'){
      this.palabra = 'Ingresa';
      this.breadPalabra = 'Crear Lugar';
    }
    else{
      this.palabra = 'Actualiza';
      this.breadPalabra = 'Editar Lugar';
      this.lugaresService.getLugar(this.id).valueChanges().subscribe(
        lugar => {
          this.lugar = lugar;
        }

      )
    }
  }

  ngOnInit() {
  }

  guardarLugar(){
    const direccion = `${this.lugar.direccion},${this.lugar.ciudad},${this.lugar.pais}`
    this.lugaresService.obtenerGeoData(direccion).subscribe((result)=>{
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;
      console.log('lat: '+ this.lugar.lat);
      console.log('lng: '+ this.lugar.lng);

      if(this.id != 'new'){
        this.lugaresService.getLugar(this.id).valueChanges().subscribe(
          lugar => {
            this.lugar = lugar;
            this.lugaresService.editarLugar(lugar);
          }
        )

      }
      else{
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        this.lugar = {};
      }

      alert('Negocio guardado con éxito');

    })

  }

}
