import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ClienteService} from '../../services/cliente.service';
import { Observable, observable } from 'rxjs';
import {Cliente} from '../../shared/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers:[ClienteService]
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  public title:string;
  public clientes:any;
  clienteList:Array<Cliente>;
  p: number = 1;

  constructor(
    private _route: ActivatedRoute,
        private _router: Router,
        private _clienteService: ClienteService
  ) { 
    this.title= 'Cliente registrados'
    this.cliente= new Cliente();
  }

  ngOnInit() {
    console.log('Componente de clientes cargado');
    this._clienteService.getAllClientes().subscribe(
      (clienteList: Cliente[]) => {
        this.clienteList = clienteList ;
      },
      () => {
        alert('Hubo un error al recuperar clientes');
      }
    );
  }

  agregarClientes(){
    this._clienteService.addCliente(this.cliente).subscribe(
(cliente:Cliente)=>{
  alert('El Cliente se ha creado exitosamente');
  this.cliente=new Cliente();
},
() => {
  alert('hubo un error al crear el cliente');
},
    );
  }
  }
