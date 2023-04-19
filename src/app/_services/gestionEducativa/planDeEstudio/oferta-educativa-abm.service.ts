import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertaEducativaABMService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }

  altaOfertaEducativa(unaOfertaEducativa: any): Observable<any> {
    return this.http.post(`${this.urlTitulos}/nuevaFecha`, unaOfertaEducativa);
  }

  bajaOfertaEducativa(idOfertaEducativa: any): Observable<any> {
    return this.http.post(`${this.urlTitulos}/bajaOfertaEducativa/${idOfertaEducativa}`, idOfertaEducativa);
  }

  modificarOfertaEducativa(unaOfertaEducativa: any): Observable<any> {
    return this.http.post(`${this.urlTitulos}/nuevaFecha`, unaOfertaEducativa);
  }
}
