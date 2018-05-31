import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from '../../services/autorizacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datosLogin:any = {}

  constructor(private autorizacionService:AutorizacionService, private router:Router) {

  }

  loguearse(){
    console.log('Solicitaste Login');
    this.autorizacionService.loguearse(this.datosLogin.email, this.datosLogin.password);
    this.router.navigate(['/lugares']);
  }

  facebookLogin(){
    this.autorizacionService.facebookLogin();
    this.router.navigate(['/lugares']);
  }

  ngOnInit() {
  }

}
