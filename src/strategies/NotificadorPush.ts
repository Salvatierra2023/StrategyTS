import { INotificador } from "./INotificador";
import { Notificacion } from "../models/Notificacion";

export class NotificadorPush implements INotificador {
    constructor(private idDispositivo: string) {}

    enviar(notificacion: Notificacion): void {
        console.log(
        `[Push] Enviando a dispositivo ${this.idDispositivo}. Mensaje: ${notificacion.getMensaje()}`
        );
    }
}
