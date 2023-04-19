import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rama } from 'src/app/_models/ofertaEducativa/rama';
import { AdministradorRama } from 'src/app/_models/perfileria/administrador-rama';

@Injectable({
  providedIn: 'root'
})
export class DatosPerfilRamaService {

  private currentPerfilesRamaSubject: BehaviorSubject<any>;
  public perfilesRama: Observable<AdministradorRama[]>;

  private currentRamaSubject: BehaviorSubject<any>;
  public ramaElegida: Observable<Rama>;

  private currentPermisosSubject: BehaviorSubject<any>;
  public permisosRama: Observable<string[]>;

  private currentPerfilRamaElegidoSubject: BehaviorSubject<any>;
  public adminRamaElegido: Observable<AdministradorRama>;



  constructor() {

    this.currentRamaSubject =
      // tslint:disable-next-line: no-non-null-assertion
      new BehaviorSubject<Rama>(JSON.parse(localStorage.getItem('ramaElegida')!));
    this.ramaElegida = this.currentRamaSubject.asObservable();

    this.currentPerfilRamaElegidoSubject =
      // tslint:disable-next-line: no-non-null-assertion
      new BehaviorSubject<AdministradorRama>(JSON.parse(localStorage.getItem('perfilRamaElegido')!));
    this.adminRamaElegido = this.currentPerfilRamaElegidoSubject.asObservable();


    this.currentPermisosSubject =
      // tslint:disable-next-line: no-non-null-assertion
      new BehaviorSubject<string[]>(JSON.parse(localStorage.getItem('permisosRama')!));
    this.permisosRama = this.currentPermisosSubject.asObservable();

    this.currentPerfilesRamaSubject =
      // tslint:disable-next-line: no-non-null-assertion
      new BehaviorSubject<AdministradorRama[]>(JSON.parse(localStorage.getItem('perfilesRama')!));
    this.perfilesRama = this.currentPerfilesRamaSubject.asObservable();
  }


  /************** PERFIL RAMA ELEGIDO ***************************** */

  public get currentPerfilRamaElegidoValue(): AdministradorRama {
    return this.currentPerfilRamaElegidoSubject.value;
  }

  nuevoPerfilRamaElegido(perfilRamaElegido: AdministradorRama): void {
    localStorage.setItem('perfilRamaElegido', JSON.stringify(perfilRamaElegido));
    this.currentPerfilRamaElegidoSubject.next(perfilRamaElegido);
  }

  /****************** RAMA ELEGIDA ************************************ */

  public get currentRamaValue(): Rama {
    return this.currentRamaSubject.value;
  }

  nuevaRama(rama: Rama): void {
    localStorage.setItem('ramaElegida', JSON.stringify(rama));
    this.currentRamaSubject.next(rama);
  }

  borrarRama(): void {

  }


  /******************* PERFILES RAMA USUARIO *********************************** */

  public get currentPerfilesRamaValue(): AdministradorRama[] {
    return this.currentPerfilesRamaSubject.value;
  }

  nuevosPerfilesRama(perfilesRama: AdministradorRama[]): void {
    localStorage.setItem('perfilesRama', JSON.stringify(perfilesRama));
    this.currentPerfilesRamaSubject.next(perfilesRama);

  }

  borrarPerfilesRama(): void {

  }

  /********************* PERMISOS PERFIL ********************************* */

  public get currentPermisosPerfil(): string[] {
    return this.currentPermisosSubject.value;
  }

  nuevosPermisosPerfil(permisosPerfil: string[]): void {
    localStorage.setItem('permisosRama', JSON.stringify(permisosPerfil));
    this.currentPermisosSubject.next(permisosPerfil);

  }

  borrarPermisos(): void {

  }

  /****************************************************** */


}
