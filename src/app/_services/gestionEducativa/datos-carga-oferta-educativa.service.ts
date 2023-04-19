import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosCargaOfertaEducativaService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }



  recuperarOrientaciones(pageNumber: number, pageSize: number, descripcion: string)
    : Observable<any> {

    if (descripcion === '') {
      descripcion = 'xxx';
    }


    return this.http.get(`${this.urlTitulos}/recuperarOrientaciones/${descripcion}`, {
      params: new HttpParams()
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }

}
