import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CursoGrupoNombre } from 'src/app/_models/secciones/curso-grupo-nombre';
import { DatosPerfilRamaService } from '../perfileria/datos-perfil-rama.service';

@Injectable({
  providedIn: 'root'
})
export class CursoGrupoNombreService {


  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient, private datosPerfilRama: DatosPerfilRamaService) { }

  recuperarCursoGrupoNombre(): Observable<any> {
    const idRama = this.datosPerfilRama.currentRamaValue.id;
    return this.http.get<any>(`${this.urlTitulos}/recuperarCursosGrupoNombre/${idRama}`);
  }

  recuperarAliasCursos(): Observable<any> {
    return this.http.get<any>(`${this.urlTitulos}/recuperarAliasCurso`);
  }

  modificarCursoGrupoNombre(cursoGrupoNombre: CursoGrupoNombre): Observable<any> {
    cursoGrupoNombre.idRama = this.datosPerfilRama.currentRamaValue.id;
    return this.http.post<any>(`${this.urlTitulos}/modificarCursoGrupoNombre`, cursoGrupoNombre);
  }
  agregarCursoGrupoNombre(cursoGrupoNombre: CursoGrupoNombre): Observable<any> {
    cursoGrupoNombre.idRama = this.datosPerfilRama.currentRamaValue.id;
    return this.http.post<any>(`${this.urlTitulos}/agregarCursoGrupoNombre`, cursoGrupoNombre);
  }

}
