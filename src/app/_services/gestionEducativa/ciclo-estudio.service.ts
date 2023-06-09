import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CicloEstudio } from 'src/app/_models/secciones/ciclo-estudio';

@Injectable({
  providedIn: 'root'
})
export class CicloEstudioService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient) { }

  recuperarCiclosEstudio(): Observable<CicloEstudio[]> {
    return this.http.get<CicloEstudio[]>(`${this.urlTitulos}/recuperarCiclosEstudio`);
  }
}
