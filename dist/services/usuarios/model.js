"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuarioModel = void 0;

var usuarioModel = function usuarioModel(username, fullname, rol, multado) {
  return {
    username: username,
    fullname: fullname,
    rol: rol,
    multado: multado
  };
};

exports.usuarioModel = usuarioModel;