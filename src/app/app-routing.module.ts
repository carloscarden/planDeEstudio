import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAutorizadoComponent } from './pages/perfileria/no-autorizado/no-autorizado.component';
import { SeleccionarPerfilComponent } from './pages/perfileria/seleccionar-perfil/seleccionar-perfil.component';
import { NavAdministracionRamaComponent } from './pages/nav-administracion-rama/nav-administracion-rama.component';
import { InicioRamaComponent } from './pages/inicio-rama/inicio-rama.component';
import { ListadoCursosGrupoComponent } from './pages/nomenclaturaCursos/listado-cursos-grupo/listado-cursos-grupo.component';
import { ListadoPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/listado-plan-de-estudio/listado-plan-de-estudio.component';
import { InicioAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/inicio-abm-plan-de-estudio/inicio-abm-plan-de-estudio.component';
import { ListadoTablasReferencialesComponent } from './pages/gestionEducativa/tablasReferenciales/listado-tablas-referenciales/listado-tablas-referenciales.component';
import { ListadoMetodosCalificacionComponent } from './pages/metodosCalificacion/listado-metodos-calificacion/listado-metodos-calificacion.component';
import { InicioDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/inicio-datos-extra/inicio-datos-extra.component';
import { ListadoMateriasComponent } from './pages/gestionEducativa/planDeEstudio/codigosMateria/listado-materias/listado-materias.component';

const routes: Routes = [
  {
    path: 'authenticate/:token',
    component: NoAutorizadoComponent
  },
  {
    path: 'seleccionarPerfil',
    component: SeleccionarPerfilComponent,
  },
  {
    path: 'navAdministracionRama',
    component: NavAdministracionRamaComponent,
    children: [
      { path: 'inicioRama', component: InicioRamaComponent },
      { path: 'cursosGrupo', component: ListadoCursosGrupoComponent },
      { path: 'gestionEducativaPlanesDeEstudio', component: ListadoPlanDeEstudioComponent },
      { path: 'altaPlanDeEstudio', component: InicioAbmPlanDeEstudioComponent },
      { path: 'modificacionPlanDeEstudio/:idPlanDeEstudio', component: InicioAbmPlanDeEstudioComponent },
      { path: 'gestionEducativaTablasReferenciales', component: ListadoTablasReferencialesComponent },
      { path: 'metodosCalificacion', component: ListadoMetodosCalificacionComponent },
      { path: 'datosExtra', component: InicioDatosExtraComponent },
      { path: 'codigosMateria', component: ListadoMateriasComponent },
      {
        path: '',
        component: InicioRamaComponent,
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }