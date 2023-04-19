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
  selector: 'app-norma-dictamen',
  templateUrl: './norma-dictamen.component.html',
  styleUrls: ['./norma-dictamen.component.scss']
})
export class NormaDictamenComponent implements OnInit {
  normaDictamenForm!: FormGroup;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<NormaDictamenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanEducativoDenominacion,
    private fb: FormBuilder,
    private tablasReferencialesService: TablasReferencialesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.normaDictamenForm = this.fb.group({
      normaDictamen: ['', Validators.required],
    });
  }

  agregarNormaDictamen(): void {
    this.loading = true;
    this.data.descripcion = this.normaDictamenForm.value.normaDictamen;
    this.data.idAtributo = NomenclaturasParaCargaPlanEducativo.NORMA_DICTAMEN;
    this.tablasReferencialesService.altaPlanEducativoDenominacion(this.data).subscribe({
      next: (v) => {
        console.log(v);
        this.data.id = v.id;
        this.loading = false;
        this.snackBar.open(MensajesExitosos.NUEVA_NORMA_DICTAMEN, 'Aceptar', { duration: 2000 });
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
