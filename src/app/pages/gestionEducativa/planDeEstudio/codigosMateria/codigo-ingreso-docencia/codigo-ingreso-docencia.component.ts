import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-ingreso-docencia',
  templateUrl: './codigo-ingreso-docencia.component.html',
  styleUrls: ['./codigo-ingreso-docencia.component.scss']
})
export class CodigoIngresoDocenciaComponent implements OnInit {

  dataSource = [];
  displayedColumns = ['codigo', 'cargaHoraria', 'divisiblePofa', 'acciones'];


  constructor() { }

  ngOnInit(): void {
  }

  cargarcodigosingresodocencia(): void { }

  editarIngresoDocencia(element: any): void { }

}
