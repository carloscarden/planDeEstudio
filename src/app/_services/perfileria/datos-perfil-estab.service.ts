import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rama } from 'src/app/_models/ofertaEducativa/rama';
import { AdministradorRama } from 'src/app/_models/perfileria/administrador-rama';

@Injectable({
  providedIn: 'root'
})
export class DatosPerfilEstabService {

  private currentIdSerSubject: BehaviorSubject<any>;
  public idSerElegido: Observable<number>;

  private currentEstabSubject: BehaviorSubject<any>;
  public estabElegido: Observable<string>;


  constructor() {

    // tslint:disable-next-line: no-non-null-assertion
    this.currentEstabSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('estab')!));
    this.estabElegido = this.currentEstabSubject.asObservable();

    // tslint:disable-next-line: no-non-null-assertion
    this.currentIdSerSubject = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('idSer')!));
    this.idSerElegido = this.currentIdSerSubject.asObservable();

  }



  public get currentIdSerValue(): number {
    return this.currentIdSerSubject.value;
  }

  nuevoIdSer(idSer: number): void {
    localStorage.setItem('idSer', JSON.stringify(idSer));
    this.currentIdSerSubject.next(idSer);
  }

  borrarIdSer(): void {

  }


  public get currentEstabValue(): string {
    return this.currentEstabSubject.value;
  }

  nuevoEstab(estab: string): void {
    localStorage.setItem('estab', JSON.stringify(estab));
    this.currentEstabSubject.next(estab);
  }



}
