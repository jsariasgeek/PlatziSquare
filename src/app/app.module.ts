import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//angular google maps
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
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
