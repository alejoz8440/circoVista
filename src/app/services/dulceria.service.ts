import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dulceria } from '../shared/models/dulceria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DulceriaService {

  public url:String;
  dulceriaList:Array<Dulceria>
  constructor(private httpClient: HttpClient) {
  }

  addDulce(dulceria: Dulceria): Observable<Dulceria> {
    return new Observable<Dulceria>((observer) => {
      this.httpClient.post(this.url+'dulceria', dulceria)
        .subscribe(
          (savedDulceria: Dulceria) => {
            observer.next(savedDulceria);
            console.log('lista de dulces ',this.dulceriaList);
          },
          (err: any) => {
            observer.error('Error guardando el Dulce');
          }
        );
    });
  }

  getAllDulces(): Observable<Dulceria[]> {
    return new Observable<Dulceria[]>((observer) => {
      this.httpClient.get(this.url+'dulceria')
        .subscribe(
          (dulceriaList: Dulceria[]) => {
            observer.next(dulceriaList);
          },
          (err: any) => {
            observer.error('Error obteniendo los Dulces');
          }
        );
    });
  }
}
