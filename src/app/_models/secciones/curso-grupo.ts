import { CicloEstudio } from "./ciclo-estudio";
import { Seccion } from "./seccion";

export class CursoGrupo {
    id!: number;
    codigo!: string;
    descripcion!: string;
    secuencia!: Seccion;
    edad!: number;
    idCursoGrupoNombre!: number;
    cicloEstudio!: CicloEstudio;
    leyendaPlanilla!: number;



    public constructor(init?: Partial<CursoGrupo>) {
        Object.assign(this, init);
    }


}
