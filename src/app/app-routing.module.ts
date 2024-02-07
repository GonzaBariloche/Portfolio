import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }, // Redirige directamente a 'portfolio'
  { path: 'proyecto/:id', component: ProyectoDetalleComponent }, // Redirige directamente a 'proyectos'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}