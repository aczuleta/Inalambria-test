"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resolver = _interopRequireDefault(require("../services/books/resolver"));

var _resolver2 = _interopRequireDefault(require("../services/usuarios/resolver"));

var _resolver3 = _interopRequireDefault(require("../services/reservas/resolver"));

var _default = [_resolver["default"], _resolver2["default"], _resolver3["default"]];
exports["default"] = _default;