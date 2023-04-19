import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MateriasDataSource } from './materias-data-source';
import { MateriaDenominacion } from 'src/app/_models/ofertaEducativa/materia-denominacion';
import { MateriaDenominacionService } from 'src/app/_services/gestionEducativa/materia-denominacion.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  myForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  materiaDenominacionDs!: MateriasDataSource;
  displayedColumns: string[] = ['nombre', 'opcion'];


  constructor(

    public dialogRef: MatDialogRef<MateriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MateriaDenominacion,
    private snackBar: MatSnackBar,
    private materiasBusquedaService: MateriaDenominacionService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      descripcion: '',
    });


    this.materiaDenominacionDs = new MateriasDataSource(this.materiasBusquedaService);
    this.materiaDenominacionDs.loadMaterias(0, 10, this.myForm.value.descripcion);


    this.myForm.valueChanges.subscribe({
      next: (v) => {
        this.materiaDenominacionDs.loadMaterias(0, 10, this.myForm.value.descripcion);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngAfterViewInit(): void {
    this.materiaDenominacionDs.counter$.pipe(tap((count) => {
      this.paginator.length = count;
    })).subscribe();

    this.paginator.page.pipe(tap(() => this.loadMaterias())).subscribe();
  }


  private loadMaterias(): void {
    this.materiaDenominacionDs.loadMaterias(this.paginator.pageIndex, this.paginator.pageSize,
      this.myForm.value.descripcion);

  }


  agregarMateria(element: any): void {
    this.data = element;
    this.dialogRef.close();

  }


}
