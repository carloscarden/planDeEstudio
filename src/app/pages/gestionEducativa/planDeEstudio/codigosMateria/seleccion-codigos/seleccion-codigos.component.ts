import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-codigos',
  templateUrl: './seleccion-codigos.component.html',
  styleUrls: ['./seleccion-codigos.component.scss']
})
export class SeleccionCodigosComponent implements OnInit {
  displayedColumns = ['seleccionar', 'descripcion', 'codigo'];
  dataSource = [];


  constructor() { }

  ngOnInit(): void {
  }

}
