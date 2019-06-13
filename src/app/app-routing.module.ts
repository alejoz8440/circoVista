import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './logica/home/home.component';
import { ClienteComponent } from './logica/cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'cliente',component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
