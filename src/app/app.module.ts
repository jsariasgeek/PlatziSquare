import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//angular google maps
import {AgmCoreModule} from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {LugaresService} from './services/lugares.service';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC0fdzE7tkcgoiMCn4VLOInQgpijVdo2mU'}),
    RouterModule.forRoot(appRoutes),
    //bootstrap
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

