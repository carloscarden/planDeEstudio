import { EstadoOferta } from "../ofertaEducativa/estado-oferta";
import { Modalidad } from "../ofertaEducativa/modalidad";
import { Nivel } from "../ofertaEducativa/nivel";
import { TipoOrganizacion } from "../ofertaEducativa/tipo-organizacion";

export class DatosParaBusquedaOferta {

    modalidades!: Modalidad[];
    niveles!: Nivel[];
    tiposOrganizacion!: TipoOrganizacion[];
    estadosOferta!: EstadoOferta[];



}
