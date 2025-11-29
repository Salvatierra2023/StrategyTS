import { INotificador } from "./INotificador";
import { Notificacion } from "../models/Notificacion";

export class NotificadorWhatsApp implements INotificador {
    constructor(private numeroTelefono: string) {}

    enviar(notificacion: Notificacion): void {
        console.log(
        `[WhatsApp] Enviando a ${this.numeroTelefono}. Mensaje: ${notificacion.getMensaje()}`
        );
    }
}
