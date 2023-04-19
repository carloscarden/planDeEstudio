import { CalificacionPeriodo } from "./calificacion-periodo";
import { CalificacionTipo } from "./calificacion-tipo";

export class CalificacionMetodo {
    idCalificacion!: number;
    nombre!: string;
    periodoEvaluacion!: CalificacionPeriodo;
    tipoCalificacion!: CalificacionTipo;
    idRama!: number;
    cantidadCalificacionesXPeriodo!: number;
    calificacionesPosibles!: string;



}
