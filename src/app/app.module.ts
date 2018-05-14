import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//angular google maps
import {AgmCoreModule} from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {Routes} from '@angular/router';

const appRoutes: Routes = [
  {path:'', component: AppComponent},
  {path:'lugares', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC0fdzE7tkcgoiMCn4VLOInQgpijVdo2mU'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
