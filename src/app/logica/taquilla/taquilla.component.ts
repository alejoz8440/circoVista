import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TaquillaService} from '../../services/taquilla.service';
import { Observable, observable } from 'rxjs';
import {Taquilla} from '../../shared/models/taquilla';

@Component({
  selector: 'app-taquilla',
  templateUrl: './taquilla.component.html',
  styleUrls: ['./taquilla.component.scss']
})
export class TaquillaComponent implements OnInit {

  taquilla: Taquilla;
  public title:string;
  public taquillas:any;
  taquillaList:Array<Taquilla>;


  constructor(
    private _route: ActivatedRoute,
        private _router: Router,
        private _taquillaService: TaquillaService
  ) { 
    this.title= 'Taquilla registrados'
    this.taquilla= new Taquilla();
  }

  ngOnInit() {
    console.log('Componente de taquilla cargado');
    this._taquillaService.getAllTaquilla().subscribe(
      (taquillaList: Taquilla[]) => {
        this.taquillaList = taquillaList ;
        console.log(taquillaList);
      },
      () => {
        alert('Hubo un error al recuperar taquilla');
      }
    );
  }

  agregarTaquilla(){
    this._taquillaService.addTaquilla(this.taquilla).subscribe(
(taquilla:Taquilla)=>{
  alert('Taquilla se ha creado exitosamente');
  this.taquilla=new Taquilla();
},
() => {
  alert('hubo un error al crear taquilla');
},
    );
  }
  }
