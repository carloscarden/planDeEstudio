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
  selector: 'app-correspondencia',
  templateUrl: './correspondencia.component.html',
  styleUrls: ['./correspondencia.component.scss']
})
export class CorrespondenciaComponent implements OnInit {

  correspondenciaForm!: FormGroup;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<CorrespondenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanEducativoDenominacion,
    private fb: FormBuilder,
    private tablasReferencialesService: TablasReferencialesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.correspondenciaForm = this.fb.group({
      correspondencia: ['', Validators.required],
    });
  }

  agregarCorrespondencia(): void {
    this.loading = true;
    this.data.descripcion = this.correspondenciaForm.value.correspondencia;
    this.data.idAtributo = NomenclaturasParaCargaPlanEducativo.SE_CORRESPONDE_CON;
    this.tablasReferencialesService.altaPlanEducativoDenominacion(this.data).subscribe({
      next: (v) => {
        console.log(v);
        this.data.id = v.id;
        this.loading = false;
        this.snackBar.open(MensajesExitosos.NUEVA_CORRESPONDENCIA, 'Aceptar', { duration: 2000 });
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
