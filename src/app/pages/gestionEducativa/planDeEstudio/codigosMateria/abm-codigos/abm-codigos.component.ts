import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-codigos',
  templateUrl: './abm-codigos.component.html',
  styleUrls: ['./abm-codigos.component.scss']
})
export class AbmCodigosComponent implements OnInit {
  cargaCodigoForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cargaCodigoForm = this.fb.group({
      cargaHoraria: ['', [Validators.required]],
      divisiblePofa: ['', [Validators.required]],
    });
  }

  guardarDatosCodigo(): void { }

}
