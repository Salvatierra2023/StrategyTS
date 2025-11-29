"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorEmail = void 0;
class NotificadorEmail {
    constructor(email) {
        this.email = email;
    }
    enviar(notificacion) {
        console.log(`[Email] Enviando a ${this.email}. Asunto: Notificación ChaMarket. Cuerpo: ${notificacion.getMensaje()}`);
    }
}
exports.NotificadorEmail = NotificadorEmail;
