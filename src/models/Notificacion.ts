import { TipoEvento } from "./TipoEvento";

export class Notificacion {
    constructor(
        private destinatario: string,
        private mensaje: string,
        private tipoEvento: TipoEvento
    ) {}

    getDestinatario(): string {
        return this.destinatario;
    }

    getMensaje(): string {
        return this.mensaje;
    }

    getTipoEvento(): TipoEvento {
        return this.tipoEvento;
    }
}
