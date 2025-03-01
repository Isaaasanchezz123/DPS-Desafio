"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cargarEspacios = exports.reservarEspacio = void 0;

var reservarEspacio = function reservarEspacio(espacioId, precio) {
  return {
    type: 'RESERVAR_ESPACIO',
    payload: {
      id: espacioId,
      costo: precio
    }
  };
};

exports.reservarEspacio = reservarEspacio;

var cargarEspacios = function cargarEspacios(listaEspacios) {
  return {
    type: 'CARGAR_ESPACIOS',
    payload: listaEspacios
  };
};

exports.cargarEspacios = cargarEspacios;
//# sourceMappingURL=actions.dev.js.map
