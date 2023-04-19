import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export class DialogData {

}

@Component({
  selector: 'app-alta-ciclo-estudio',
  templateUrl: './alta-ciclo-estudio.component.html',
  styleUrls: ['./alta-ciclo-estudio.component.scss']
})
export class AltaCicloEstudioComponent implements OnInit {
  cicloEstudioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AltaCicloEstudioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cicloEstudioForm = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  altaCicloEstudio(): void {

  }

}
