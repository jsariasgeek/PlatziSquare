import {Component, ComponentRef, OnInit} from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import {ResponseGeoapiInterface} from '../../interfaces/response-geoapi.interface';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';




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
  id:any = null;




  results$: Observable<any>;
  private searchField: FormControl;

  constructor(private route: ActivatedRoute, private lugaresService:LugaresService, private http:HttpClient) {
    this.id = this.route.snapshot.params['id'];
    if(this.id != 'new'){
      this.palabra = 'Actualiza';
      this.breadPalabra = 'Editar Lugar';
      this.lugaresService.getLugar(this.id).valueChanges().subscribe(
        lugar => {
          this.lugar = lugar;
        }

      )
    }
    else{
      this.palabra = 'Ingresa';
      this.breadPalabra = 'Crear Lugar';

    }

    const URL = 'https://maps.google.com/maps/api/geocode/json';
    const api_key = environment.googleMapsApiKey;
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${URL}?address=${query}&key=${api_key}`))
      .map(response => response['results'])
  }



  ngOnInit() {
  }

  public guardarDireccion(result){
    console.log(result);
    console.log(result.address_components[1].long_name);
    this.lugar.direccion = result.address_components[1].long_name + ' ' + result.address_components[0].short_name;
    this.lugar.ciudad = result.address_components[result.address_components.length-4].long_name;
    this.lugar.pais = result.address_components[result.address_components.length-2].long_name;
  }

  guardarLugar(){
    console.log(this.lugar.ciudad);
    const direccion = `${this.lugar.direccion},${this.lugar.ciudad},${this.lugar.pais}`
    this.lugaresService.obtenerGeoData(direccion).subscribe((result: ResponseGeoapiInterface)=>{
      this.lugar.lng = result.results[0].geometry.location.lng;
      console.log('lat: '+ this.lugar.lat);
      console.log('lng: '+ this.lugar.lng);

      if(this.id != 'new'){
        /*this.lugaresService.getLugar(this.id).valueChanges().subscribe(
          lugar => {
            this.lugar = lugar;*/
            this.lugaresService.editarLugar(this.lugar);
          }
      else{
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        this.lugar = {};
      }
      });


  }

}
