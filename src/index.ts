import { NotificationEngine } from "./engine/NotificationEngine";
import { Notificacion } from "./models/Notificacion";
import { TipoEvento } from "./models/TipoEvento";
import { NotificadorWhatsApp } from "./strategies/NotificadorWhatsApp";
import { NotificadorEmail } from "./strategies/NotificadorEmail";
import { NotificadorPush } from "./strategies/NotificadorPush";

// Configuración del motor
const engine = new NotificationEngine();

const canalWhatsApp = new NotificadorWhatsApp("+51 999 999 999");
const canalEmail = new NotificadorEmail("bodeguero@chamarket.com");
const canalPush = new NotificadorPush("DEVICE-12345");

// Reglas por evento
engine.registrarCanal(TipoEvento.PROMOCION, canalWhatsApp);
engine.registrarCanal(TipoEvento.PROMOCION, canalEmail);

engine.registrarCanal(TipoEvento.STOCK_MINIMO, canalPush);

engine.registrarCanal(TipoEvento.MANTENIMIENTO, canalEmail);
engine.registrarCanal(TipoEvento.MANTENIMIENTO, canalPush);

// Notificaciones de prueba
const notiPromo = new Notificacion(
    "Bodega San Martín",
    "¡Nueva promoción! 20% de descuento en tus primeras 5 órdenes.",
    TipoEvento.PROMOCION
);

const notiStock = new Notificacion(
    "Bodega San Martín",
    "Alerta: tu stock de gaseosa de 500ml está por agotarse.",
    TipoEvento.STOCK_MINIMO
);

const notiMantenimiento = new Notificacion(
    "Bodega San Martín",
    "Mañana a las 2:00 am habrá una ventana de mantenimiento del sistema.",
    TipoEvento.MANTENIMIENTO
);

engine.enviar(notiPromo);
engine.enviar(notiStock);
engine.enviar(notiMantenimiento);
