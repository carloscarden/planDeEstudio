import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesExitosos } from 'src/app/_models/mensajes/mensajes-exitosos.enum';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { CalificacionMetodo } from 'src/app/_models/ofertaEducativa/calificacion-metodo';
import { CalificacionPeriodo } from 'src/app/_models/ofertaEducativa/calificacion-periodo';
import { CalificacionTipo } from 'src/app/_models/ofertaEducativa/calificacion-tipo';
import { MetodosCalificacionService } from 'src/app/_services/gestionEducativa/metodos-calificacion.service';


export interface DialogData {
  metodoCalificacion: CalificacionMetodo;
  operacion: string;
}

@Component({
  selector: 'app-alta-metodos-calificacion',
  templateUrl: './alta-metodos-calificacion.component.html',
  styleUrls: ['./alta-metodos-calificacion.component.scss']
})
export class AltaMetodosCalificacionComponent implements OnInit {

  myForm!: FormGroup;
  loadingForm = false;

  calificacionesPeriodo: CalificacionPeriodo[] = [];
  calificacionesTipo: CalificacionTipo[] = [];

  constructor(
    public dialogRef: MatDialogRef<AltaMetodosCalificacionComponent >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private metodosCalificacionService: MetodosCalificacionService
  ) { }

  ngOnInit(): void {
    this.loadingForm = true;
    this.metodosCalificacionService.recuperarPeriodosDeEvaluacion().subscribe({
      next: (v) => {
        console.log(v);
        this.calificacionesPeriodo = v;
        this.loadingForm = false;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        this.loadingForm = false;
      }
    });

    this.metodosCalificacionService.recuperarTiposDeCalificacion().subscribe({
      next: (v) => {
        console.log(v);
        this.calificacionesTipo = v;
        this.loadingForm = false;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        this.loadingForm = false;
      }
    });


    this.myForm = this.fb.group({
      nombre: [this.data.metodoCalificacion.nombre, Validators.required],
      periodoEvaluacion: [this.data.metodoCalificacion.periodoEvaluacion, Validators.required],
      tipoCalificacion: [this.data.metodoCalificacion.tipoCalificacion, Validators.required],
      cantidadCalificacionesXPeriodo:
        [this.data.metodoCalificacion.cantidadCalificacionesXPeriodo, Validators.required],
      calificacionesPosibles: [this.data.metodoCalificacion.calificacionesPosibles, Validators.required],
    });

    if (this.data.operacion === 'VER') {
      this.myForm.disable();
    }

  }

  altaOModificacion(): void {

    if (this.data.metodoCalificacion.idCalificacion !== null) {
      this.metodosCalificacionService.altaMetodoCalificacion(this.data.metodoCalificacion).subscribe({
        next: (v) => {
          console.log(v);
          this.data.metodoCalificacion.idCalificacion = v.idCalificacion;
          this.snackBar.open(MensajesExitosos.METODO_CALIFICACION_CREADO, 'Aceptar', { duration: 2000 });

        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    } else {
      this.metodosCalificacionService.modificacionCalificacion(this.data.metodoCalificacion).subscribe({
        next: (v) => {
          console.log(v);
          this.snackBar.open(
            MensajesExitosos.METODO_CALIFICACION_MODIFICADO, 'Aceptar', { duration: 2000 });
        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    }
  }

}
