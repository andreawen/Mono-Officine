import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { GuastiComponent } from './guasti/guasti.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    QrCodeComponent,
    GuastiComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U'
    }),
    ModalModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
