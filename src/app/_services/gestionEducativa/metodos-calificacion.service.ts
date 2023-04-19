import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosPerfilRamaService } from '../perfileria/datos-perfil-rama.service';
import { CalificacionMetodo } from 'src/app/_models/ofertaEducativa/calificacion-metodo';
import { CalificacionPeriodo } from 'src/app/_models/ofertaEducativa/calificacion-periodo';
import { CalificacionTipo } from 'src/app/_models/ofertaEducativa/calificacion-tipo';

@Injectable({
  providedIn: 'root'
})
export class MetodosCalificacionService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient, private datosRama: DatosPerfilRamaService) { }

  recuperarMetodosCalificacion(): Observable<any> {
    const idRama = this.datosRama.currentRamaValue.id;
    return this.http.get<CalificacionMetodo[]>(`${this.urlTitulos}/recuperarMetodosDeCalificacion/${idRama}`);
  }

  recuperarPeriodosDeEvaluacion(): Observable<any> {
    return this.http.get<CalificacionPeriodo[]>(`${this.urlTitulos}/recuperarPeriodosDeEvaluacion`);
  }

  recuperarTiposDeCalificacion(): Observable<any> {
    return this.http.get<CalificacionTipo[]>(`${this.urlTitulos}/recuperarTiposDeCalificacion`);
  }

  altaMetodoCalificacion(calificacionMetodo: CalificacionMetodo): Observable<any> {
    calificacionMetodo.idRama = this.datosRama.currentRamaValue.id;
    return this.http.post(`${this.urlTitulos}/altaMetodoCalificacion`, calificacionMetodo);
  }


  modificacionCalificacion(metodoCalificacion: CalificacionMetodo): Observable<any> {
    metodoCalificacion.idRama = this.datosRama.currentRamaValue.id;
    return this.http.post(`${this.urlTitulos}/altaMetodoCalificacion`, metodoCalificacion);
  }


  borrarCalificacion(idCalificacion: number): Observable<any> {
    return this.http.delete(`${this.urlTitulos}/altaMetodoCalificacion/${idCalificacion}`);
  }

}
