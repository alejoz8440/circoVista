import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EmpleadoService} from '../../services/empleado.service';
import { Observable, observable } from 'rxjs';
import {Empleado} from '../../shared/models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  empleado : Empleado;
  public title:string;
  public empleados:any;
  empleadoList:Array<Empleado>;


  constructor(
    private _route: ActivatedRoute,
        private _router: Router,
        private _empleadoService: EmpleadoService
  ) { 
    this.title= 'Empleados registrados'
    this.empleado= new Empleado();
  }

  ngOnInit() {
    console.log('Componente de empleados cargado');
    this._empleadoService.getAllEmpleados().subscribe(
      (empleadoList: Empleado[]) => {
        this.empleadoList = empleadoList ;
      },
      () => {
        alert('Hubo un error al recuperar empleados');
      }
    );
  }

  agregarEmpleados(){
    this._empleadoService.addEmpleado(this.empleado).subscribe(
(empleado:Empleado)=>{
  alert('El Empleado se ha creado exitosamente');
  this.empleado=new Empleado();
},
() => {
  alert('hubo un error al crear el empleado');
},
    );
  }
  }
