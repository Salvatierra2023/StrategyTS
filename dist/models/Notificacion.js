"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacion = void 0;
class Notificacion {
    constructor(destinatario, mensaje, tipoEvento) {
        this.destinatario = destinatario;
        this.mensaje = mensaje;
        this.tipoEvento = tipoEvento;
    }
    getDestinatario() {
        return this.destinatario;
    }
    getMensaje() {
        return this.mensaje;
    }
    getTipoEvento() {
        return this.tipoEvento;
    }
}
exports.Notificacion = Notificacion;
