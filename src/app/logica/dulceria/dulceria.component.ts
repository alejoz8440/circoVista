import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DulceriaService} from '../../services/dulceria.service';
import { Observable, observable } from 'rxjs';
import {Dulceria} from '../../shared/models/dulceria';

@Component({
  selector: 'app-dulceria',
  templateUrl: './dulceria.component.html',
  styleUrls: ['./dulceria.component.scss']
})
export class DulceriaComponent implements OnInit {

  dulceria: Dulceria;
  public title:string;
  public dulces:any;
  dulceriaList:Array<Dulceria>;


  constructor(
    private _route: ActivatedRoute,
        private _router: Router,
        private _dulceriaService: DulceriaService
  ) { 
    this.title= 'Cliente registrados'
    this.dulceria= new Dulceria();
  }

  ngOnInit() {
    console.log('Componente de dulceria cargado');
    this._dulceriaService.getAllDulces().subscribe(
      (dulceriaList: Dulceria[]) => {
        this.dulceriaList = dulceriaList ;
      },
      () => {
        alert('Hubo un error al recuperar dulceria');
      }
    );
  }

  agregarDulces(){
    this._dulceriaService.addDulce(this.dulceria).subscribe(
(dulceria:Dulceria)=>{
  alert('El dulce se ha creado exitosamente');
  this.dulceria=new Dulceria();
},
() => {
  alert('hubo un error al crear el dulce');
},
    );
  }
  }
