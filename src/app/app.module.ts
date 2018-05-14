import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//angular google maps
import {AgmCoreModule} from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle', component: DetalleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC0fdzE7tkcgoiMCn4VLOInQgpijVdo2mU'}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
