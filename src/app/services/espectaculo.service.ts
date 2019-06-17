import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Espectaculo } from '../shared/models/espectaculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectaculoService {

  public url:String;
  espectaculoList:Array<Espectaculo>
  constructor(private httpClient: HttpClient) {
    this.url=environment.backEndBaseURL;
  }

  addEspectaculo(espectaculo: Espectaculo): Observable<Espectaculo> {
    return new Observable<Espectaculo>((observer) => {
      this.httpClient.post(this.url+'espectaculo', espectaculo)
        .subscribe(
          (savedEspectaculo: Espectaculo) => {
            observer.next(savedEspectaculo);
            console.log('lista de espectaculos ',this.espectaculoList);
          },
          (err: any) => {
            observer.error('Error guardando el Espectauculo');
          }
        );
    });
  }

  getAllEspectaculos(): Observable<Espectaculo[]> {
    return new Observable<Espectaculo[]>((observer) => {
      this.httpClient.get(this.url+'espectaculos')
        .subscribe(
          (espectaculoList: Espectaculo[]) => {
            observer.next(espectaculoList);
          },
          (err: any) => {
            observer.error('Error obteniendo los espectaculos');
          }
        );
    });
  }
}
