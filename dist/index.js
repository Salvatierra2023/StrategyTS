"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationEngine_1 = require("./engine/NotificationEngine");
const Notificacion_1 = require("./models/Notificacion");
const TipoEvento_1 = require("./models/TipoEvento");
const NotificadorWhatsApp_1 = require("./strategies/NotificadorWhatsApp");
const NotificadorEmail_1 = require("./strategies/NotificadorEmail");
const NotificadorPush_1 = require("./strategies/NotificadorPush");
// Configuración del motor
const engine = new NotificationEngine_1.NotificationEngine();
const canalWhatsApp = new NotificadorWhatsApp_1.NotificadorWhatsApp("+51 999 999 999");
const canalEmail = new NotificadorEmail_1.NotificadorEmail("bodeguero@chamarket.com");
const canalPush = new NotificadorPush_1.NotificadorPush("DEVICE-12345");
// Reglas por evento
engine.registrarCanal(TipoEvento_1.TipoEvento.PROMOCION, canalWhatsApp);
engine.registrarCanal(TipoEvento_1.TipoEvento.PROMOCION, canalEmail);
engine.registrarCanal(TipoEvento_1.TipoEvento.STOCK_MINIMO, canalPush);
engine.registrarCanal(TipoEvento_1.TipoEvento.MANTENIMIENTO, canalEmail);
engine.registrarCanal(TipoEvento_1.TipoEvento.MANTENIMIENTO, canalPush);
// Notificaciones de prueba
const notiPromo = new Notificacion_1.Notificacion("Bodega San Martín", "¡Nueva promoción! 20% de descuento en tus primeras 5 órdenes.", TipoEvento_1.TipoEvento.PROMOCION);
const notiStock = new Notificacion_1.Notificacion("Bodega San Martín", "Alerta: tu stock de gaseosa de 500ml está por agotarse.", TipoEvento_1.TipoEvento.STOCK_MINIMO);
const notiMantenimiento = new Notificacion_1.Notificacion("Bodega San Martín", "Mañana a las 2:00 am habrá una ventana de mantenimiento del sistema.", TipoEvento_1.TipoEvento.MANTENIMIENTO);
engine.enviar(notiPromo);
engine.enviar(notiStock);
engine.enviar(notiMantenimiento);
