import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesExitosos } from 'src/app/_models/mensajes/mensajes-exitosos.enum';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { AliasCurso } from 'src/app/_models/secciones/alias-curso';
import { CursoGrupoNombre } from 'src/app/_models/secciones/curso-grupo-nombre';
import { CursoGrupoNombreService } from 'src/app/_services/gestionEducativa/curso-grupo-nombre.service';

export class DialogData {
  cursoGrupoNombre!: CursoGrupoNombre;
  opcion!: string;
}

@Component({
  selector: 'app-abm-curso-grupo',
  templateUrl: './abm-curso-grupo.component.html',
  styleUrls: ['./abm-curso-grupo.component.scss']
})
export class AbmCursoGrupoComponent implements OnInit {

  aliasCursos: AliasCurso[] = [];

  abmCursoGrupoNombreForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AbmCursoGrupoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private cursoGrupoNombreService: CursoGrupoNombreService
  ) { }

  ngOnInit(): void {
    this.cursoGrupoNombreService.recuperarAliasCursos().subscribe({
      next: (v) => {
        console.log(v);
        this.aliasCursos = v;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });

    this.abmCursoGrupoNombreForm = this.fb.group({
      alias: ['', Validators.required],
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    if (this.data.opcion !== 'AGREGAR') {
      this.abmCursoGrupoNombreForm.patchValue(
        {
          alias: this.data.cursoGrupoNombre.idAliasCurso,
          codigo: this.data.cursoGrupoNombre.codigo,
          descripcion: this.data.cursoGrupoNombre.descripcion
        }
      );
    }

    if (this.data.opcion === 'VER') {
      this.abmCursoGrupoNombreForm.disable();
    }
  }


  agregarOmodificarCursoGrupoNombre(): void {
    const cursoGrupoNombre = new CursoGrupoNombre();
    cursoGrupoNombre.codigo = this.abmCursoGrupoNombreForm.value.codigo;
    cursoGrupoNombre.idAliasCurso = this.abmCursoGrupoNombreForm.value.alias;
    cursoGrupoNombre.descripcion = this.abmCursoGrupoNombreForm.value.descripcion;

    if (this.data.cursoGrupoNombre.id === null) {
      this.cursoGrupoNombreService.agregarCursoGrupoNombre(cursoGrupoNombre).subscribe({
        next: (v) => {
          console.log(v);
          this.data.cursoGrupoNombre.id = v.id;
          this.snackBar.open(MensajesExitosos.ALTA_CURSO_GRUPO_NOMBRE, 'Aceptar', { duration: 2000 });

        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    } else {
      cursoGrupoNombre.id = this.data.cursoGrupoNombre.id;
      this.cursoGrupoNombreService.modificarCursoGrupoNombre(cursoGrupoNombre).subscribe({
        next: (v) => {
          console.log(v);
          this.snackBar.open(MensajesExitosos.MODIF_CURSO_GRUPO_NOMBRE, 'Aceptar', { duration: 2000 });
        },
        error: (e) => {
          console.log(e);
          this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
        }
      });
    }

  }



}
