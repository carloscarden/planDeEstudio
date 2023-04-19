import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosPerfilRamaService } from '../../perfileria/datos-perfil-rama.service';
import { BusquedaOferta } from 'src/app/_models/busquedas/busqueda-oferta';
import { DatosParaBusquedaOferta } from 'src/app/_models/busquedas/datos-para-busqueda-oferta';


@Injectable({
  providedIn: 'root'
})
export class OfertaEducativaBusquedasService {
  urlTitulos = `${environment.api_url}`;


  constructor(private http: HttpClient, private datosPerfilRama: DatosPerfilRamaService) { }

  buscarOfertasEducativas(pageNumber: number, pageSize: number, busquedaOferta: BusquedaOferta)
    : Observable<any> {


    console.log('service estab', busquedaOferta);
    busquedaOferta.ramaResponsable = this.datosPerfilRama.currentPerfilRamaElegidoValue.descripcion;

    return this.http.post(`${this.urlTitulos}/recuperarOfertasEducativas`, busquedaOferta, {
      params: new HttpParams()
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }


  buscarDatosParaBusquedasOferta(): Observable<DatosParaBusquedaOferta> {

    const idRama = this.datosPerfilRama.currentPerfilRamaElegidoValue.id;
    return this.http.get<DatosParaBusquedaOferta>(`${this.urlTitulos}/datosParaBusquedaOferta/${idRama}`);
  }
}
