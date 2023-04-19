import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { Rama } from 'src/app/_models/ofertaEducativa/rama';
import { OpcionPerfil } from 'src/app/_models/perfileria/opcion-perfil';


@Injectable({
  providedIn: 'root'
})
export class PerfileriaService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }


  buscarPerfiles(dni: string): Observable<OpcionPerfil> {
    return this.http.get<any>(`${this.urlTitulos}/recuperarOpcionesPerfil/${dni}`);
  }

  buscarOpcionRamaElegida(idRama: number): Observable<Rama> {
    return this.http.get<any>(`${this.urlTitulos}/recuperarOpcionRamaElegida/${idRama}`);
  }

  buscarPermisosPerfil(idPerfil: number): Observable<string[]> {
    return this.http.get<any>(`${this.urlTitulos}/verPermisosRamaDelPerfil/${idPerfil}`);
  }

  buscarIdSer(claveEstab: string): Observable<number> {
    return this.http.get<any>(`${this.urlTitulos}/retornarIdSerDeEstabElegido/${claveEstab}`);
  }

}
