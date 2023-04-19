import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { AdministradorRama } from 'src/app/_models/perfileria/administrador-rama';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PerfileriaService } from 'src/app/_services/perfileria/perfileria.service';
import { DatosPerfilEstabService } from 'src/app/_services/perfileria/datos-perfil-estab.service';
import { DatosPerfilRamaService } from 'src/app/_services/perfileria/datos-perfil-rama.service';
import { Rama } from 'src/app/_models/ofertaEducativa/rama';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { of } from 'rxjs/internal/observable/of';
import { OpcionPerfil } from 'src/app/_models/perfileria/opcion-perfil';

@Component({
  selector: 'app-seleccionar-perfil',
  templateUrl: './seleccionar-perfil.component.html',
  styleUrls: ['./seleccionar-perfil.component.scss']
})
export class SeleccionarPerfilComponent implements OnInit {

  perfilesUsuario!: string[];
  perfilElegido = null;
  opcionesRama!: AdministradorRama[];
  opcionRamaElegida!: AdministradorRama;
  estabElegido = '';

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private loadingSubmitSubject = new BehaviorSubject<boolean>(false);
  public loadingSubmit$ = this.loadingSubmitSubject.asObservable();


  filteredOptions!: Observable<AdministradorRama[]>;


  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private perfileriaService: PerfileriaService,
    private datosPerfilEstab: DatosPerfilEstabService,
    private datosPerfilRama: DatosPerfilRamaService
  ) { }


  ngOnInit(): void {
    this.loadingSubject.next(true);
    this.perfileriaService.buscarPerfiles('28660621').subscribe({
      next: (opcionesPerfil: OpcionPerfil) => {
        this.perfilesUsuario = Object.keys(opcionesPerfil);
        this.opcionesRama = opcionesPerfil['Administrador rama'];
        this.datosPerfilRama.nuevosPerfilesRama(this.opcionesRama);
        this.filteredOptions = of(this.opcionesRama);
      },
      error: (err) => {
        this.computarError(err);
      },
      complete: () => this.loadingSubject.next(false)

    });


  }

  applyFilter(evt: any): void {
    this.filteredOptions = of(
      this.opcionesRama.filter(option => option.descripcion.toLowerCase().includes(evt))
    );

  }


  getOptionText(opt: AdministradorRama): string {
    return opt?.descripcion;

  }


  onSubmit(): void {
    this.loadingSubmitSubject.next(true);
    if (this.perfilElegido === 'Administrador rama') {
      this.procesarAdministradorRama();
    } else if (this.perfilElegido === 'Rendicion') {
      this.router.navigate(['/navAdministracionRendicion']);
    } else {
      this.procesarAdministradorEstab();
    }
  }


  procesarAdministradorRama(): void {
    this.perfileriaService.buscarPermisosPerfil(this.opcionRamaElegida.idPerfil).subscribe({
      next: (permisosPerfil: string[]) => {
        this.datosPerfilRama.nuevosPermisosPerfil(permisosPerfil);
        this.datosPerfilRama.nuevoPerfilRamaElegido(this.opcionRamaElegida);
      },
      error: (e) => console.error(e),
      complete: () => this.loadingSubmitSubject.next(false)
    });

    this.perfileriaService.buscarOpcionRamaElegida(this.opcionRamaElegida.idRama).subscribe({
      next: (rama: Rama) => {
        this.datosPerfilRama.nuevaRama(rama);
        this.router.navigate(['/navAdministracionRama']);
      },
      error: (err) => {
        this.computarError(err);
      },
      complete: () => this.loadingSubmitSubject.next(false)
    });
  }

  procesarAdministradorEstab(): void {
    this.perfileriaService.buscarIdSer(this.estabElegido).subscribe({
      next: (idSer: number) => {
        this.datosPerfilEstab.nuevoEstab(this.estabElegido);
        this.datosPerfilEstab.nuevoIdSer(idSer);
        this.router.navigate(['/navAdministracionEstab']);
      },
      error: (e) => {
        this.computarError(e);
      },
      complete: () => this.loadingSubmitSubject.next(false)
    });
  }


  computarError(err: any): void {
    console.log(err);
    if (err.status !== 'UNPROCESSABLE_ENTITY') {
      this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
    }

    if (err.status === 'UNPROCESSABLE_ENTITY') {
      this.snackBar.open('', 'Aceptar', { duration: 2000 });
    }
  }


  procesaBienEstab(): boolean {
    if (this.perfilElegido === '') {
      return true;
    }
    if (this.perfilElegido !== 'Super administrador') {
      return true;
    }
    if (this.estabElegido !== '') {
      return true;
    }
    return false;
  }

}
