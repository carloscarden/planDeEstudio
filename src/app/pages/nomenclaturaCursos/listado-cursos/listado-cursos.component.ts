import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { AbmCursoComponent } from '../abm-curso/abm-curso.component';
import { CursoGrupo } from 'src/app/_models/secciones/curso-grupo';
import { CursoGrupoService } from 'src/app/_services/gestionEducativa/curso-grupo.service';

export class DialogData {
  idCursoGrupoNombre!: number;
}


@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss']
})
export class ListadoCursosComponent implements OnInit {

  displayedColumns: string[] = ['secuencia', 'codigo', 'descripcion', 'opciones'];
  listadoCursosDS: CursoGrupo[] = [];

  constructor(
    public dialogRef: MatDialogRef<ListadoCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    private cursoGrupoService: CursoGrupoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoGrupoService.recuperarCursosGrupo(this.data.idCursoGrupoNombre).subscribe({
      next: (v) => {
        console.log(v);
        this.listadoCursosDS = v;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  crearCursoGrupo(): void {
    const dialogRef = this.dialog.open(AbmCursoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupo: new CursoGrupo(),
        opcion: 'CREAR'
      },
    });
  }


  verCursoGrupo(element: any): void {
    const dialogRef = this.dialog.open(AbmCursoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupo: element,
        opcion: 'VER'
      },
    });
  }


  modificarCursoGrupo(element: any): void {
    const dialogRef = this.dialog.open(AbmCursoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupo: element,
        opcion: 'MODIFICAR'
      },
    });


  }



  eliminarCursoGrupo(element: any): void { }



}
