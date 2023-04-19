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
