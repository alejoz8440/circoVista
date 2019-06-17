import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EspectaculoService} from '../../services/espectaculo.service';
import { Observable, observable } from 'rxjs';
import {Espectaculo} from '../../shared/models/espectaculo';

@Component({
  selector: 'app-espectaculo',
  templateUrl: './espectaculo.component.html',
  styleUrls: ['./espectaculo.component.scss']
})
export class EspectaculoComponent implements OnInit {

  espectaculo: Espectaculo;
  public title:string;
  public espectaculos:any;
  espectaculoList:Array<Espectaculo>;


  constructor(
    private _route: ActivatedRoute,
        private _router: Router,
        private _espectaculoService: EspectaculoService
  ) { 
    this.title= 'Espectaculos registrados'
    this.espectaculo= new Espectaculo();
  }

  ngOnInit() {
    console.log('Componente de espectaculos cargado');
    this._espectaculoService.getAllEspectaculos().subscribe(
      (especuloList: Espectaculo[]) => {
        this.espectaculoList = especuloList;
      },
      () => {
        alert('Hubo un error al recuperar espectaculos');
      }
    );
  }

  agregarClientes(){
    this._espectaculoService.addEspectaculo(this.espectaculo).subscribe(
(espectaculo:Espectaculo)=>{
  alert('El Espectaculo se ha creado exitosamente');
  this.espectaculo=new Espectaculo();
},
() => {
  alert('hubo un error al crear el espectaculo');
},
    );
  }
  }
