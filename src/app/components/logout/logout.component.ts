import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from '../../services/autorizacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autorizacionService:AutorizacionService) {
    this.autorizacionService.desloguearse();

  }

  ngOnInit() {
  }

}
