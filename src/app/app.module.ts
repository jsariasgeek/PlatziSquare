import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { CrearComponent } from './components/crear/crear.component';
import {SelectedDirective} from './directives/selected.directive';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';
import {LinkifystrPipe} from './pipes/linkifystr.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import {AutorizacionService} from './services/autorizacion.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LogoutComponent } from './components/logout/logout.component';
import {MyGuardService} from './services/my-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'lugares/crear/:id', component: CrearComponent, canActivate:[MyGuardService]},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[MyGuardService]},
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'logout', component: LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ResaltarDirective,
    SelectedDirective,
    ContarClicksDirective,
    LugaresComponent,
    HomeComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC0fdzE7tkcgoiMCn4VLOInQgpijVdo2mU'}),
    RouterModule.forRoot(appRoutes),
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //bootstrap
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    LugaresService,
    AutorizacionService,
    MyGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

