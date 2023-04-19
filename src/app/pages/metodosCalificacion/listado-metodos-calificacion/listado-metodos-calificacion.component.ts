import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AltaMetodosCalificacionComponent } from '../alta-metodos-calificacion/alta-metodos-calificacion.component';
import { DialogDeleteComponent } from '../../commons/dialog-delete/dialog-delete.component';
import { MetodosCalificacionService } from 'src/app/_services/gestionEducativa/metodos-calificacion.service';
import { CalificacionMetodo } from 'src/app/_models/ofertaEducativa/calificacion-metodo';

const ELEMENT_DATA: CalificacionMetodo[] = [];
@Component({
  selector: 'app-listado-metodos-calificacion',
  templateUrl: './listado-metodos-calificacion.component.html',
  styleUrls: ['./listado-metodos-calificacion.component.scss']
})
export class ListadoMetodosCalificacionComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'periodoEvaluacion', 'cantidadCalificacionesPorPeriodo',
    'tipoCalificacion', 'calificacionesPosibles', 'opciones'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog,
    private metodosCalificacionService: MetodosCalificacionService,
    private snackBar: MatSnackBar,
  ) { }


  ngOnInit(): void {
    this.metodosCalificacionService.recuperarMetodosCalificacion().subscribe({
      next: (v) => {
        console.log(v);
        this.dataSource = v;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }


  agregarMetodoDeCalificacion(): void {

    const dialogRef = this.dialog.open(AltaMetodosCalificacionComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        metodoCalificacion: new CalificacionMetodo(),
        operacion: 'ALTA'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.metodoCalificacion) {
        this.dataSource.push(result.metodoCalificacion);
      }
    });
  }



  modificarMetodoDeCalificacion(element: any): void {
    this.dialog.open(AltaMetodosCalificacionComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        metodoCalificacion: element,
        operacion: 'MODIFICAR'
      },
    });

  }


  verMetodoDeCalificacion(element: any): void {
    this.dialog.open(AltaMetodosCalificacionComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        metodoCalificacion: element,
        operacion: 'VER'

      },
    });
  }



  eliminarMetodoDeCalificacion(element: any): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        mensajeEliminacion: 'caca a eliminar?'
      },
    });


    dialogRef.afterClosed().subscribe(eliminarOk => {
      if (eliminarOk) {
        this.metodosCalificacionService.borrarCalificacion(element.idCalificacion).subscribe({
          next: (v) => {
            console.log(v);
            this.dataSource = this.dataSource.filter(item => item !== element);
            this.snackBar.open(v.mensajeDelete, 'Aceptar', { duration: 2000 });

          },
          error: (e) => {
            console.log(e);
            this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
          }
        });
      }
    });

  }


}
