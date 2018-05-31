import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from '../../services/autorizacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = null;
  email = null;
  loggedIn = false
  imgUrl = null;

  constructor(private autorizacionService:AutorizacionService) {
    this.autorizacionService.isLogged().subscribe((result)=>{
      if(result && result.uid){
        this.loggedIn = true;
        this.name = this.autorizacionService.getName();
        this.imgUrl = this.autorizacionService.getImgUrl();
        this.email = this.autorizacionService.getEmail();
      }
      else{
        this.loggedIn = false;
      }
    }, (error)=>{
      this.loggedIn = false;
    })
  }

  ngOnInit() {
  }

}
