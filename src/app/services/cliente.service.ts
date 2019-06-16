import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../shared/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) {
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return new Observable<Cliente>((observer) => {
      this.httpClient.post(`${environment.backEndBaseURL+cliente}`, cliente)
        .subscribe(
          (savedCliente: Cliente) => {
            observer.next(savedCliente);
          },
          (err: any) => {
            observer.error('Error guardando el Cliente');
          }
        );
    });
  }

  getAllClientes(): Observable<Cliente[]> {
    return new Observable<Cliente[]>((observer) => {
      this.httpClient.get(`${environment.backEndBaseURL}`+'clientes')
        .subscribe(
          (clienteList: Cliente[]) => {
            observer.next(clienteList);
          },
          (err: any) => {
            observer.error('Error obteniendo los Clientes');
          }
        );
    });
  }
}
