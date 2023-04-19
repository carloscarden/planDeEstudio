import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioRamaComponent } from './pages/inicio-rama/inicio-rama.component';
import { NavAdministracionRamaComponent } from './pages/nav-administracion-rama/nav-administracion-rama.component';
import { ListadoTablasReferencialesComponent } from './pages/gestionEducativa/tablasReferenciales/listado-tablas-referenciales/listado-tablas-referenciales.component';
import { AltaModificacionTablasReferencialesComponent } from './pages/gestionEducativa/tablasReferenciales/alta-modificacion-tablas-referenciales/alta-modificacion-tablas-referenciales.component';
import { ListadoPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/listado-plan-de-estudio/listado-plan-de-estudio.component';
import { InicioAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/inicio-abm-plan-de-estudio/inicio-abm-plan-de-estudio.component';
import { EdadesPorSeccionAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/edades-por-seccion-abm-plan-de-estudio/edades-por-seccion-abm-plan-de-estudio.component';
import { DatosAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datos-abm-plan-de-estudio/datos-abm-plan-de-estudio.component';
import { MateriasAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/materias-abm-plan-de-estudio/materias-abm-plan-de-estudio.component';
import { EvaluacionesAbmPlanDeEstudioComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/evaluaciones-abm-plan-de-estudio/evaluaciones-abm-plan-de-estudio.component';
import { CorrespondenciaComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/correspondencia/correspondencia.component';
import { EdadComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/edad/edad.component';
import { LeyDeEducacionComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/ley-de-educacion/ley-de-educacion.component';
import { MateriasComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/materias/materias.component';
import { NormaAprobacionComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/norma-aprobacion/norma-aprobacion.component';
import { NormaDictamenComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/norma-dictamen/norma-dictamen.component';
import { OrientacionesComponent } from './pages/gestionEducativa/planDeEstudio/abmPlanDeEstudio/datosParaCarga/orientaciones/orientaciones.component';
import { ListadoMateriasComponent } from './pages/gestionEducativa/planDeEstudio/codigosMateria/listado-materias/listado-materias.component';
import { SeleccionCodigosComponent } from './pages/gestionEducativa/planDeEstudio/codigosMateria/seleccion-codigos/seleccion-codigos.component';
import { CodigoIngresoDocenciaComponent } from './pages/gestionEducativa/planDeEstudio/codigosMateria/codigo-ingreso-docencia/codigo-ingreso-docencia.component';
import { AbmCodigosComponent } from './pages/gestionEducativa/planDeEstudio/codigosMateria/abm-codigos/abm-codigos.component';
import { MateriasDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/materias-datos-extra/materias-datos-extra.component';
import { InicioDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/inicio-datos-extra/inicio-datos-extra.component';
import { AnioDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/anio-datos-extra/anio-datos-extra.component';
import { AbmAnioDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/abm-anio-datos-extra/abm-anio-datos-extra.component';
import { AbmDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/abm-datos-extra/abm-datos-extra.component';
import { AbmMateriasDatosExtraComponent } from './pages/gestionEducativa/planDeEstudio/datosExtra/abm-materias-datos-extra/abm-materias-datos-extra.component';
import { AbmCursoComponent } from './pages/nomenclaturaCursos/abm-curso/abm-curso.component';
import { AbmCursoGrupoComponent } from './pages/nomenclaturaCursos/abm-curso-grupo/abm-curso-grupo.component';
import { ListadoCursosComponent } from './pages/nomenclaturaCursos/listado-cursos/listado-cursos.component';
import { ListadoCursosGrupoComponent } from './pages/nomenclaturaCursos/listado-cursos-grupo/listado-cursos-grupo.component';
import { AltaCicloEstudioComponent } from './pages/nomenclaturaCursos/alta-ciclo-estudio/alta-ciclo-estudio.component';
import { ListadoMetodosCalificacionComponent } from './pages/metodosCalificacion/listado-metodos-calificacion/listado-metodos-calificacion.component';
import { AltaMetodosCalificacionComponent } from './pages/metodosCalificacion/alta-metodos-calificacion/alta-metodos-calificacion.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioRamaComponent,
    NavAdministracionRamaComponent,
    ListadoTablasReferencialesComponent,
    AltaModificacionTablasReferencialesComponent,
    ListadoPlanDeEstudioComponent,
    InicioAbmPlanDeEstudioComponent,
    EdadesPorSeccionAbmPlanDeEstudioComponent,
    DatosAbmPlanDeEstudioComponent,
    MateriasAbmPlanDeEstudioComponent,
    EvaluacionesAbmPlanDeEstudioComponent,
    CorrespondenciaComponent,
    EdadComponent,
    LeyDeEducacionComponent,
    MateriasComponent,
    NormaAprobacionComponent,
    NormaDictamenComponent,
    OrientacionesComponent,
    ListadoMateriasComponent,
    SeleccionCodigosComponent,
    CodigoIngresoDocenciaComponent,
    AbmCodigosComponent,
    MateriasDatosExtraComponent,
    InicioDatosExtraComponent,
    AnioDatosExtraComponent,
    AbmAnioDatosExtraComponent,
    AbmDatosExtraComponent,
    AbmMateriasDatosExtraComponent,
    AbmCursoComponent,
    AbmCursoGrupoComponent,
    ListadoCursosComponent,
    ListadoCursosGrupoComponent,
    AltaCicloEstudioComponent,
    ListadoMetodosCalificacionComponent,
    AltaMetodosCalificacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
