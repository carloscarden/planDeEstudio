import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosPerfilRamaService } from '../../perfileria/datos-perfil-rama.service';


@Injectable({
  providedIn: 'root'
})
export class OfertaEducativaAccionesService {

  urlTitulos = `${environment.api_url}`;

  constructor(private http: HttpClient, private datosPerfilRama: DatosPerfilRamaService) { }

  pegarDatos(idsAcopiarPegar: any): Observable<any> {
    return this.http.post(`${this.urlTitulos}/pegarDatosMateria`, idsAcopiarPegar);
  }


  duplicarOferta(idOferta: any): Observable<any> {

    const idRama = this.datosPerfilRama.currentRamaValue.id;
    return this.http.post(
      `${this.urlTitulos}/duplicarOferta/idOferta/${idOferta}/idRama/${idRama}`, idOferta);
  }

  cambiarOfertaEducativa(idOferta: any, codigo: string): Observable<any> {
    return this.http.post(
      `${this.urlTitulos}/cambiarEstadoOfertaEducativa/idOferta/${idOferta}/codigo/${codigo}`, idOferta);
  }

  guardarDatosExtra(datosExtra: any): Observable<any> {
    return this.http.post(`${this.urlTitulos}/guardarDatosExtra`, datosExtra);
  }



}
