export class User {
    nombre: string;
    documento: string;
    permisoElegido!: any;
    ramaElegida: string | undefined;
    rolElegido: any;
    escuela: string;
    token?: string;


    constructor(
        miJson: any,
        token: string | undefined) {
        this.nombre = miJson.auth;
        this.documento = miJson.documento;
        this.ramaElegida = miJson.ramaElegida;
        this.escuela = miJson.escuela;
        this.token = token;

    }


}
