import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './logica/home/home.component';
import { ClienteComponent } from './logica/cliente/cliente.component';
import { EmpleadoComponent } from './logica/empleado/empleado.component';
import { DulceriaComponent } from './logica/dulceria/dulceria.component';
import { TipoClienteComponent } from './logica/tipo-cliente/tipo-cliente.component';
import { EspectaculoComponent } from './logica/espectaculo/espectaculo.component';
import { TaquillaComponent } from './logica/taquilla/taquilla.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'empleado',component:EmpleadoComponent},
  {path:'dulceria',component:DulceriaComponent},
  {path:'espectaculo',component:EspectaculoComponent},
  {path:'taquilla',component:TaquillaComponent},
  {path:'tipocliente',component:TipoClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
