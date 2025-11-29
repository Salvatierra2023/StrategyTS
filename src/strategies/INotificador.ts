import { Notificacion } from "../models/Notificacion";

export interface INotificador {
    enviar(notificacion: Notificacion): void;
}
