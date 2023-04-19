import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesExitosos } from 'src/app/_models/mensajes/mensajes-exitosos.enum';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { CicloEstudio } from 'src/app/_models/secciones/ciclo-estudio';
import { CursoGrupo } from 'src/app/_models/secciones/curso-grupo';
import { Seccion } from 'src/app/_models/secciones/seccion';
import { AltaCicloEstudioComponent } from '../alta-ciclo-estudio/alta-ciclo-estudio.component';
import { CursoGrupoService } from 'src/app/_services/gestionEducativa/curso-grupo.service';
import { CicloEstudioService } from 'src/app/_services/gestionEducativa/ciclo-estudio.service';

export class DialogDataCursoGrupo {
  cursoGrupo!: CursoGrupo;
  opcion!: string;
}
@Component({
  selector: 'app-abm-curso',
  templateUrl: './abm-curso.component.html',
  styleUrls: ['./abm-curso.component.scss']
})
export class AbmCursoComponent implements OnInit {

  cursoGrupoForm!: FormGroup;

  aniosDeEstudio: Seccion[] = [];
  ciclosDeEstudio: CicloEstudio[] = [];

  constructor(
    public dialogRef: MatDialogRef<AbmCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCursoGrupo,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private cursoGrupoService: CursoGrupoService,
    private cicloEstudioService: CicloEstudioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.cursoGrupoForm = this.fb.group({
      cicloEstudio: ['', Validators.required],
      secuencia: ['', Validators.required],
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      edad: ['', Validators.required],
      leyendaPlanilla: ['', Validators.required],
    });

    if (this.data.opcion !== 'AGREGAR') {
      this.cursoGrupoForm.patchValue({
        cicloEstudio: this.data.cursoGrupo.cicloEstudio,
        secuencia: this.data.cursoGrupo.secuencia,
        codigo: this.data.cursoGrupo.codigo,
        descripcion: this.data.cursoGrupo.descripcion,
        edad: this.data.cursoGrupo.edad,
        leyendaPlanilla: this.data.cursoGrupo.leyendaPlanilla
      });
    }

    if (this.data.opcion === 'VER') {
      this.cursoGrupoForm.disable();
    }

    this.cursoGrupoService.recuperarAniosDeEstudio().subscribe({
      next: (v) => {
        console.log(v);
        this.aniosDeEstudio = v;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });

    this.cicloEstudioService.recuperarCiclosEstudio().subscribe({
      next: (v) => {
        console.log(v);
        this.ciclosDeEstudio = v;

      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  altaOModificacioCursoGrupo(): void {
    const c = new CursoGrupo(this.cursoGrupoForm.value);

    if (this.data.opcion === 'AGREGAR') {
      this.cursoGrupoService.altaCursoGrupo(c).subscribe({
        next: (v) => {
          console.log(v);
          this.data.cursoGrupo.id = v.id;
          this.snackBar.open(MensajesExitosos.ALTA_CURSO_GRUPO, 'Aceptar', { duration: 2000 });

        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    } else {
      c.id = this.data.cursoGrupo.id;
      this.cursoGrupoService.modificarCursoGrupo(c).subscribe({
        next: (v) => {
          console.log(v);

          this.snackBar.open(MensajesExitosos.MODIF_CURSO_GRUPO, 'Aceptar', { duration: 2000 });
        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    }
  }

  altaCicloEstudio(): void {
    const dialogRef = this.dialog.open(AltaCicloEstudioComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        idCursoGrupo: null,
      },
    });
  }

}
