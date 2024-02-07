import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Agregamos esta línea
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { AngularFirestoreModule } from "@angular/fire/firestore";

import { LoginComponent } from '../app/componentes/login/login.component';
import { LoginModule } from './componentes/login/login.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';

import { getAnalytics } from "firebase/analytics";
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';


import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion/educacion.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Proyecto3Component } from './proyecto3/proyecto3.component';
import { Proyecto4Component } from './proyecto4/proyecto4.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaEducacionComponent,
    PortfolioComponent,
    EducacionComponent,
    BannerComponent,
    Proyecto1Component,
    Proyecto2Component,
    Proyecto3Component,
    Proyecto4Component,
    ProyectoDetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

