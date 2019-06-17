import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../shared/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url:String;
  clienteList:Array<Cliente>
  constructor(private httpClient: HttpClient) {
    this.url=environment.backEndBaseURL;
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return new Observable<Cliente>((observer) => {
      this.httpClient.post(this.url+'cliente', cliente)
        .subscribe(
          (savedCliente: Cliente) => {
            observer.next(savedCliente);
            console.log('lista de clientes ',this.clienteList);
          },
          (err: any) => {
            observer.error('Error guardando el Cliente');
          }
        );
    });
  }

  getAllClientes(): Observable<Cliente[]> {
    return new Observable<Cliente[]>((observer) => {
      this.httpClient.get(this.url+'clientes')
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
