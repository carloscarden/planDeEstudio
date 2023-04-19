import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesExitosos } from 'src/app/_models/mensajes/mensajes-exitosos.enum';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { NomenclaturasParaCargaPlanEducativo } from 'src/app/_models/ofertaEducativa/nomenclaturas-para-carga-plan-educativo.enum';
import { PlanEducativoDenominacion } from 'src/app/_models/ofertaEducativa/plan-educativo-denominacion';
import { TablasReferencialesService } from 'src/app/_services/gestionEducativa/tablas-referenciales.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.scss']
})
export class EdadComponent implements OnInit {

  edadForm!: FormGroup;
  loading = false;


  constructor(
    public dialogRef: MatDialogRef<EdadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanEducativoDenominacion,
    private fb: FormBuilder,
    private tablasReferencialesService: TablasReferencialesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.edadForm = this.fb.group({
      edad: ['', Validators.required],
    });
  }

  agregarEdad(): void {
    this.loading = true;
    this.data.descripcion = this.edadForm.value.edad;
    this.data.idAtributo = NomenclaturasParaCargaPlanEducativo.EDADXSECCION;
    this.tablasReferencialesService.altaPlanEducativoDenominacion(this.data).subscribe({
      next: (v) => {
        console.log(v);
        this.data.id = v.id;
        this.loading = false;
        this.snackBar.open(MensajesExitosos.NUEVA_EDAD, 'Aceptar', { duration: 2000 });
        this.dialogRef.close();

      },
      error: (e) => {
        console.log(e);
        this.loading = false;
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });

  }


}
