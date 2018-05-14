import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  guardarLugar(){
    console.log(this.lugar);
  }

}
