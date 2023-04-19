import { Modalidad } from "./modalidad";
import { Nivel } from "./nivel";

export class Rama {
    id!: number;
    codigo!: string;
    descripcion!: string;
    nivel!: Nivel;
    modalidad!: Modalidad;
    ensenanza!: number;
    dependenciaFuncional!: number;
    auditoriaTitulo!: number;

}
