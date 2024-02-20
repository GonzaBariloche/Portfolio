import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component'; // Importa el componente de proyecto1
import { Proyecto2Component } from './proyecto2/proyecto2.component'; // Importa el componente de proyecto2
import { Proyecto3Component } from './proyecto3/proyecto3.component'; // Importa el componente de proyecto3
import { Proyecto4Component } from './proyecto4/proyecto4.component'; // Importa el componente de proyecto4

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'proyecto1', component: Proyecto1Component }, // Ruta para proyecto1
  { path: 'proyecto2', component: Proyecto2Component }, // Ruta para proyecto2
  { path: 'proyecto3', component: Proyecto3Component }, // Ruta para proyecto3
  { path: 'proyecto4', component: Proyecto4Component }, // Ruta para proyecto4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}