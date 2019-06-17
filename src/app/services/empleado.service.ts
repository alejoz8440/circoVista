import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleado } from '../shared/models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public url:String;
  empleadoList:Array<Empleado>
  constructor(private httpClient: HttpClient) {
    this.url=environment.backEndBaseURL;
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return new Observable<Empleado>((observer) => {
      this.httpClient.post(this.url+'empleado', empleado)
        .subscribe(
          (savedEmpleado: Empleado) => {
            observer.next(savedEmpleado);
            console.log('lista de empleados ',this.empleadoList);
          },
          (err: any) => {
            observer.error('Error guardando el Empleado');
          }
        );
    });
  }

  getAllEmpleados(): Observable<Empleado[]> {
    return new Observable<Empleado[]>((observer) => {
      this.httpClient.get(this.url+'empleados')
        .subscribe(
          (empleadoList: Empleado[]) => {
            observer.next(empleadoList);
          },
          (err: any) => {
            observer.error('Error obteniendo los Empleados');
          }
        );
    });
  }
}
