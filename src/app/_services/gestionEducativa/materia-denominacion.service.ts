import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaDenominacion } from 'src/app/_models/ofertaEducativa/materia-denominacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriaDenominacionService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }


  buscarMateriasDenominacion(pageNumber: number, pageSize: number, descripcion: string)
    : Observable<any> {

    if (descripcion === '') {
      descripcion = 'xxxx';
    }
    return this.http.get(`${this.urlTitulos}/buscarMateriasDenominacion/${descripcion}`, {
      params: new HttpParams()
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }


  altaMateriaDenominacion(materiaDenominacion: MateriaDenominacion): Observable<any> {
    return this.http.post(`${this.urlTitulos}/nuevaFecha`, materiaDenominacion);
  }

  modificacionMateriaDenominacion(materiaDenominacion: MateriaDenominacion): Observable<any> {
    return this.http.post(`${this.urlTitulos}/nuevaFecha`, materiaDenominacion);
  }
}
