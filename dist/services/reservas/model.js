"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verboseReservaModel = exports.reservaModel = void 0;

var reservaModel = function reservaModel(idLibro, idPersona, fechaCheckout, fechaRetorno, fechaRetornado) {
  return {
    idLibro: idLibro,
    idPersona: idPersona,
    fechaCheckout: fechaCheckout,
    fechaRetorno: fechaRetorno,
    fechaRetornado: fechaRetornado
  };
};

exports.reservaModel = reservaModel;

var verboseReservaModel = function verboseReservaModel(id, idLibro, idPersona, fechaCheckout, fechaRetorno, fechaRetornado, persona, libro) {
  return {
    id: id,
    idLibro: idLibro,
    idPersona: idPersona,
    fechaCheckout: fechaCheckout,
    fechaRetorno: fechaRetorno,
    fechaRetornado: fechaRetornado,
    persona: persona,
    libro: libro
  };
};

exports.verboseReservaModel = verboseReservaModel;