import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoLinealComponent } from './grafico-lineal/grafico-lineal.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    GraficoLinealComponent,
    GraficoBarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
