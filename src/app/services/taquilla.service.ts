import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Taquilla } from '../shared/models/taquilla';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaquillaService {

  public url:String;
  taquillaList:Array<Taquilla>
  constructor(private httpClient: HttpClient) {
    this.url=environment.backEndBaseURL;
  }

  addTaquilla(taquilla: Taquilla): Observable<Taquilla> {
    return new Observable<Taquilla>((observer) => {
      this.httpClient.post(this.url+'taquilla', taquilla)
        .subscribe(
          (savedTaquilla: Taquilla) => {
            observer.next(savedTaquilla);
            console.log('lista de Taquilla ',this.taquillaList);
          },
          (err: any) => {
            observer.error('Error guardando taquilla');
          }
        );
    });
  }

  getAllTaquilla(): Observable<Taquilla[]> {
    return new Observable<Taquilla[]>((observer) => {
      this.httpClient.get(this.url+'taquilla')
        .subscribe(
          (taquillaList: Taquilla[]) => {
            observer.next(taquillaList);
          },
          (err: any) => {
            observer.error('Error obteniendo taquilla');
          }
        );
    });
  }
}
