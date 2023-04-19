import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seccion } from 'src/app/_models/secciones/seccion';
import { CursoGrupo } from 'src/app/_models/secciones/curso-grupo';


@Injectable({
  providedIn: 'root'
})
export class CursoGrupoService {
  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }

  recuperarCursosGrupo(idCursoGrupoNombre: number): Observable<any> {
    return this.http.get<any>(`${this.urlTitulos}/recuperarCursosGrupo/${idCursoGrupoNombre}`);
  }

  recuperarAniosDeEstudio(): Observable<any> {
    return this.http.get<Seccion[]>(`${this.urlTitulos}/recuperarAniosDeEstudio`);
  }

  altaCursoGrupo(unCursoGrupo: CursoGrupo): Observable<any> {
    return this.http.post(`${this.urlTitulos}/altaCursoGrupo`, unCursoGrupo);
  }

  modificarCursoGrupo(c: CursoGrupo): Observable<any> {
    return this.http.post(`${this.urlTitulos}/modificarCursoGrupo`, c);
  }

}
