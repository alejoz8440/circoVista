import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DulceriaComponent } from './dulceria/dulceria.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EspectaculoComponent } from './espectaculo/espectaculo.component';
import { TaquillaComponent } from './taquilla/taquilla.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TipoClienteComponent, ClienteComponent, DulceriaComponent, EmpleadoComponent, EspectaculoComponent, TaquillaComponent, UsuarioComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    
  ],
  exports:[]
})
export class LogicaModule { }
