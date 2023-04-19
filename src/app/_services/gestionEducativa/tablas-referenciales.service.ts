import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanEducativoDenominacion } from 'src/app/_models/ofertaEducativa/plan-educativo-denominacion';


@Injectable({
  providedIn: 'root'
})
export class TablasReferencialesService {
  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }




  buscarPlanEducativoDenominacion(pageNumber: number, pageSize: number, descripcion: string,
                                  tipoTablaReferencial: number): Observable<any> {

    if (descripcion === '') {
      descripcion = 'xxxx';
    }
    return this.http.get(
      `${this.urlTitulos}/buscarPlanEducativo/descripcion/${descripcion}/tipo/${tipoTablaReferencial}`, {
      params: new HttpParams()
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }


  altaPlanEducativoDenominacion(planEducativoDenominacion: PlanEducativoDenominacion): Observable<any> {
    return this.http.post(`${this.urlTitulos}/agregarPlanEducativo`, planEducativoDenominacion);
  }

  modificacionPlanEducativoDenominacion(planEducativoDenominacion: PlanEducativoDenominacion): Observable<any> {
    return this.http.post(`${this.urlTitulos}/modificarPlanEducativo`, planEducativoDenominacion);
  }
}
