export class BusquedaOferta {
    titulo!: string;
    orientacion!: string;
    nivel!: number;
    ramaResponsable!: string;
    tipoOrganizacion!: string;
    estado!: string;


    public constructor(init?: Partial<BusquedaOferta>) {
        Object.assign(this, init);
    }
}
