"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEngine = void 0;
class NotificationEngine {
    constructor() {
        this.canalesPorEvento = new Map();
    }
    registrarCanal(tipoEvento, notificador) {
        var _a;
        const actuales = (_a = this.canalesPorEvento.get(tipoEvento)) !== null && _a !== void 0 ? _a : [];
        actuales.push(notificador);
        this.canalesPorEvento.set(tipoEvento, actuales);
    }
    enviar(notificacion) {
        const tipo = notificacion.getTipoEvento();
        const canales = this.canalesPorEvento.get(tipo);
        if (!canales || canales.length === 0) {
            console.log(`No hay canales configurados para el evento ${tipo}. Notificación no enviada.`);
            return;
        }
        canales.forEach((canal) => canal.enviar(notificacion));
    }
}
exports.NotificationEngine = NotificationEngine;
