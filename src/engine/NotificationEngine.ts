import { TipoEvento } from "../models/TipoEvento";
import { Notificacion } from "../models/Notificacion";
import { INotificador } from "../strategies/INotificador";

export class NotificationEngine {
    private canalesPorEvento: Map<TipoEvento, INotificador[]> = new Map();

    registrarCanal(tipoEvento: TipoEvento, notificador: INotificador): void {
        const actuales = this.canalesPorEvento.get(tipoEvento) ?? [];
        actuales.push(notificador);
        this.canalesPorEvento.set(tipoEvento, actuales);
    }

    enviar(notificacion: Notificacion): void {
        const tipo = notificacion.getTipoEvento();
        const canales = this.canalesPorEvento.get(tipo);

        if (!canales || canales.length === 0) {
        console.log(
            `No hay canales configurados para el evento ${tipo}. Notificación no enviada.`
        );
        return;
        }

        canales.forEach((canal) => canal.enviar(notificacion));
    }
}
