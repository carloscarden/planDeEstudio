import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  displayedColumns = ['orden', 'materia', 'marcaModulo', 'cargaHoraria', 'codigos', 'codigoscargados'];

  dataSource = [];

  constructor() { }

  ngOnInit(): void {
  }


  verCodigoMateria(element: any): void {

  }
}
