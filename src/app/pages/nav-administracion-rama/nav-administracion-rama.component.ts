import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MensajesGenerales } from 'src/app/_models/mensajes/mensajes-generales.enum';
import { Rama } from 'src/app/_models/ofertaEducativa/rama';
import { AdministradorRama } from 'src/app/_models/perfileria/administrador-rama';
import { DatosPerfilRamaService } from 'src/app/_services/perfileria/datos-perfil-rama.service';
import { PerfileriaService } from 'src/app/_services/perfileria/perfileria.service';

@Component({
  selector: 'app-nav-administracion-rama',
  templateUrl: './nav-administracion-rama.component.html',
  styleUrls: ['./nav-administracion-rama.component.scss']
})
export class NavAdministracionRamaComponent implements OnInit {
  perfilRamaElegido: AdministradorRama = new AdministradorRama();
  perfilesRama: AdministradorRama[] = [];

  constructor(
    public datosPerfilRamaService: DatosPerfilRamaService,
    private perfileriaService: PerfileriaService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.perfilesRama = this.datosPerfilRamaService.currentPerfilesRamaValue;
    this.perfilRamaElegido = this.datosPerfilRamaService.currentPerfilRamaElegidoValue;
  }

  cambiarPerfil(opcionRamaElegida: any): void {
    this.perfileriaService.buscarPermisosPerfil(opcionRamaElegida.idPerfil).subscribe({
      next: (permisosPerfil: string[]) => {
        this.datosPerfilRamaService.nuevosPermisosPerfil(permisosPerfil);
        this.datosPerfilRamaService.nuevoPerfilRamaElegido(opcionRamaElegida);
      },
      error: (e) => console.error(e),
    });

    this.perfileriaService.buscarOpcionRamaElegida(opcionRamaElegida.idRama).subscribe({
      next: (rama: Rama) => {
        this.datosPerfilRamaService.nuevaRama(rama);
        this.router.navigate(['/navAdministracionRama']);
      },
      error: (err) => {
        this.computarError(err);
      },
    });

  }


  computarError(err: any): void {
    console.log(err);
    if (err.status !== 'UNPROCESSABLE_ENTITY') {
      this.snackBar.open(MensajesGenerales.ERROR, 'Aceptar', { duration: 2000 });
    }

    if (err.status === 'UNPROCESSABLE_ENTITY') {
      this.snackBar.open('', 'Aceptar', { duration: 2000 });
    }
  }


}
