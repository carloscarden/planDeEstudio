import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { ListadoCursosComponent } from '../listado-cursos/listado-cursos.component';
import { CursoGrupoNombre } from 'src/app/_models/secciones/curso-grupo-nombre';
import { AbmCursoGrupoComponent } from '../abm-curso-grupo/abm-curso-grupo.component';
import { CursoGrupoNombreService } from 'src/app/_services/gestionEducativa/curso-grupo-nombre.service';



const ELEMENT_DATA: CursoGrupoNombre[] = [];
@Component({
  selector: 'app-listado-cursos-grupo',
  templateUrl: './listado-cursos-grupo.component.html',
  styleUrls: ['./listado-cursos-grupo.component.scss']
})
export class ListadoCursosGrupoComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descripcion', 'opciones'];
  cursoGrupoNombreDS = ELEMENT_DATA;

  constructor(
    private cursoGrupoNombreService: CursoGrupoNombreService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoGrupoNombreService.recuperarCursoGrupoNombre().subscribe({
      next: (v) => {
        console.log(v);
        this.cursoGrupoNombreDS = v;
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
      }
    });
  }

  agregarCursoGrupoNombre(): void {
    const dialogRef = this.dialog.open(AbmCursoGrupoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupoNombre: new CursoGrupoNombre(),
        opcion: 'ALTA'
      }
    });

  }

  verCursoGrupoNombre(element: any): void {
    const dialogRef = this.dialog.open(AbmCursoGrupoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupoNombre: element,
        opcion: 'VER'
      }
    });
  }

  modificarCursoGrupoNombre(element: any): void {
    const dialogRef = this.dialog.open(AbmCursoGrupoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupoNombre: element,
        opcion: 'MODIFICAR'
      }
    });

  }

  eliminarCursoGrupoNombre(element: any): void {
    const dialogRef = this.dialog.open(AbmCursoGrupoComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        cursoGrupoNombre: element,
        opcion: 'MODIFICAR'
      }
    });

    dialogRef.afterClosed().subscribe(eliminarOk => {
      if (eliminarOk) {
        console.log('eliminarOk');
      }
    });


  }

  administrarCursoGrupoNombre(element: any): void {
    const dialogRef = this.dialog.open(ListadoCursosComponent, {
      autoFocus: false,
      maxWidth: '180vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        idCursoGrupoNombre: element.id
      },
    });
  }


}
