import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MateriaDenominacion } from 'src/app/_models/ofertaEducativa/materia-denominacion';
import { OrientacionDataSource } from './orientacion-data-source';
import { Orientacion } from 'src/app/_models/ofertaEducativa/orientacion';
import { DatosCargaOfertaEducativaService } from 'src/app/_services/gestionEducativa/datos-carga-oferta-educativa.service';

@Component({
  selector: 'app-orientaciones',
  templateUrl: './orientaciones.component.html',
  styleUrls: ['./orientaciones.component.scss']
})
export class OrientacionesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['codigo', 'nombre', 'seleccion'];

  orientacionDs!: OrientacionDataSource;


  myForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<OrientacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Orientacion,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private datosCargaOfertaService: DatosCargaOfertaEducativaService,
  ) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      descripcion: '',
    });



    this.orientacionDs = new OrientacionDataSource(this.datosCargaOfertaService);
    this.orientacionDs.loadFirmas(0, 10, this.myForm.value.descripcion);
    this.myForm.valueChanges.subscribe({
      next: (v) => {
        this.orientacionDs.loadFirmas(0, 10, this.myForm.value.descripcion);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }



  ngAfterViewInit(): void {
    this.orientacionDs.counter$.pipe(tap((count) => {
      this.paginator.length = count;
    })).subscribe();

    this.paginator.page.pipe(tap(() => this.loadFirmas())).subscribe();
  }


  private loadFirmas(): void {
    this.orientacionDs.loadFirmas(this.paginator.pageIndex, this.paginator.pageSize,
      this.myForm.value.descripcion);

  }

  aceptarSeleccion(element: any): void {
    this.data = element;
    this.dialogRef.close();

  }


}
