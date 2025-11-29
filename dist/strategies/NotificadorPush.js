"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorPush = void 0;
class NotificadorPush {
    constructor(idDispositivo) {
        this.idDispositivo = idDispositivo;
    }
    enviar(notificacion) {
        console.log(`[Push] Enviando a dispositivo ${this.idDispositivo}. Mensaje: ${notificacion.getMensaje()}`);
    }
}
exports.NotificadorPush = NotificadorPush;
