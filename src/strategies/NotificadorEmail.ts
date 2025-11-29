import { INotificador } from "./INotificador";
import { Notificacion } from "../models/Notificacion";

export class NotificadorEmail implements INotificador {
    constructor(private email: string) {}

    enviar(notificacion: Notificacion): void {
        console.log(
        `[Email] Enviando a ${this.email}. Asunto: Notificación ChaMarket. Cuerpo: ${notificacion.getMensaje()}`
        );
    }
}
