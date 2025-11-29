"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorWhatsApp = void 0;
class NotificadorWhatsApp {
    constructor(numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }
    enviar(notificacion) {
        console.log(`[WhatsApp] Enviando a ${this.numeroTelefono}. Mensaje: ${notificacion.getMensaje()}`);
    }
}
exports.NotificadorWhatsApp = NotificadorWhatsApp;
