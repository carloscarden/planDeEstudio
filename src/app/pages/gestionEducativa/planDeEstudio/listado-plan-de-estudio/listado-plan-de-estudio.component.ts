import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MensajesExitosos } from 'src/app/_models/mensajes/mensajes-exitosos.enum';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { EstadoOferta } from 'src/app/_models/ofertaEducativa/estado-oferta';
import { Modalidad } from 'src/app/_models/ofertaEducativa/modalidad';
import { Nivel } from 'src/app/_models/ofertaEducativa/nivel';
import { TipoOrganizacion } from 'src/app/_models/ofertaEducativa/tipo-organizacion';
import { OfertaEducativaDataSource } from './oferta-educativa-data-source';
import { BusquedaOferta } from 'src/app/_models/busquedas/busqueda-oferta';
import { OfertaEducativaBusquedasService } from 'src/app/_services/gestionEducativa/planDeEstudio/oferta-educativa-busquedas.service';
import { OfertaEducativaAccionesService } from 'src/app/_services/gestionEducativa/planDeEstudio/oferta-educativa-acciones.service';
import { OfertaEducativaABMService } from 'src/app/_services/gestionEducativa/planDeEstudio/oferta-educativa-abm.service';


@Component({
  selector: 'app-listado-plan-de-estudio',
  templateUrl: './listado-plan-de-estudio.component.html',
  styleUrls: ['./listado-plan-de-estudio.component.scss']
})
export class ListadoPlanDeEstudioComponent implements AfterViewInit, OnInit{

  buscadorForm!: FormGroup;
  panelOpenState = false;

  tipoOrganizaciones: TipoOrganizacion[] = [];
  modalidades: Modalidad[] = [];
  niveles: Nivel[] = [];
  estados: EstadoOferta[] = [];

  idOfertaEducativaCopiada = 0;
  loading = false;


  displayedColumns: string[] = ['titulo', 'orientacion', 'resolucion', 'estado', 'opciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ofertaEducativaDs!: OfertaEducativaDataSource;


  constructor(
    private ofertaEducativaAccionesService: OfertaEducativaAccionesService,
    private ofertaEducativaAbmService: OfertaEducativaABMService,
    private ofertaEducativaBusquedaService: OfertaEducativaBusquedasService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buscadorForm = this.fb.group({
      titulo: ' ',
      orientacion: ' ',
      nivel: ' ',
      tipoOrganizacion: ' ',
      ramaResponsable: ' ',
      estado: ' ',
    });


    this.ofertaEducativaBusquedaService.buscarDatosParaBusquedasOferta().subscribe({
      next: (v) => {
        console.log(v);
        this.estados = v.estadosOferta;
        this.tipoOrganizaciones = v.tiposOrganizacion;
        this.niveles = v.niveles;
        this.modalidades = v.modalidades;
        this.loading = false;
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });

    const busqueda = new BusquedaOferta(this.buscadorForm.value);
    this.ofertaEducativaDs = new OfertaEducativaDataSource(this.ofertaEducativaBusquedaService);
    this.ofertaEducativaDs.loadFirmas(0, 10, busqueda);
    this.buscadorForm.valueChanges.subscribe({
      next: (v) => {
        const b = new BusquedaOferta(this.buscadorForm.value);
        this.ofertaEducativaDs.loadFirmas(0, 10, b);
      },
      error: (e) => {
        console.log(e);
      }
    });

  }


  ngAfterViewInit(): void {
    this.ofertaEducativaDs.counter$.pipe(tap((count) => {
      this.paginator.length = count;
    })).subscribe();

    this.paginator.page.pipe(tap(() => this.loadFirmas())).subscribe();
  }


  private loadFirmas(): void {
    const busqueda = new BusquedaOferta(this.buscadorForm.value);
    this.ofertaEducativaDs.loadFirmas(this.paginator.pageIndex, this.paginator.pageSize, busqueda);

  }

  altaOfertaEducativa(): void {
    this.router.navigate(['/navAdministracionRama/altaPlanDeEstudio']);
  }

  duplicarOfertaEducativa(unaOfertaEducativa: any): void {
    this.loading = true;
    this.ofertaEducativaAccionesService.duplicarOferta(unaOfertaEducativa).subscribe({
      next: (v) => {
        console.log(v);
        this.loading = false;
        this.snackBar.open(MensajesExitosos.DUPLICADA_OFERTA, 'Aceptar', { duration: 2000 });
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  habilitarOfertaEducativa(unaOfertaEducativa: any): void {
    this.ofertaEducativaAccionesService.cambiarOfertaEducativa(unaOfertaEducativa.id, 'caca').subscribe({
      next: (v) => {
        console.log(v);
        this.loading = false;
        this.snackBar.open(MensajesExitosos.HABILITADA_OFERTA, 'Aceptar', { duration: 2000 });
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  bajaOfertaEducativa(unaOfertaEducativa: any): void {
    this.loading = true;
    this.ofertaEducativaAbmService.bajaOfertaEducativa(unaOfertaEducativa.id).subscribe({
      next: (v) => {
        console.log(v);
        this.loading = false;
        this.snackBar.open(MensajesExitosos.BAJA_OFERTA, 'Aceptar', { duration: 2000 });
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  codigosMateriaOfertaEducativa(unaOfertaEducativa: any): void {
    this.router.navigate([`/navAdministracionRama/codigosMateria/${unaOfertaEducativa.id}`]);
  }

  modificarOfertaEducativa(unaOfertaEducativa: any): void {
    this.router.navigate([`/navAdministracionRama/modificacionPlanDeEstudio/${unaOfertaEducativa.id}`]);
  }

  datosExtraOfertaEducativa(unaOfertaEducativa: any): void {
    this.router.navigate([`/navAdministracionRama/datosExtra/${unaOfertaEducativa.id}`]);
  }

  copiarOfertaEducativa(unaOfertaEducativa: any): void {
    this.idOfertaEducativaCopiada = unaOfertaEducativa.id;
  }

  pegarOfertaEducativa(unaOfertaEducativa: any): void {
    this.ofertaEducativaAccionesService.pegarDatos(unaOfertaEducativa).subscribe({
      next: (v) => {
        console.log(v);
        this.loading = false;
        this.snackBar.open(MensajesExitosos.PEGADA_OFERTA, 'Aceptar', { duration: 2000 });
      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  verOfertaEducativa(unaOfertaEducativa: any): void {
    throw new Error('Method not implemented.');
  }

}
