"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = require("./model");

var _repository = require("./repository");

var usuariosRepository = (0, _repository.UsuariosRepository)();
var _default = {
  Query: {
    usuarios: function () {
      var _usuarios = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _objectDestructuringEmpty2["default"])(_ref);
                (0, _objectDestructuringEmpty2["default"])(_ref2);
                _context.prev = 2;
                _context.next = 5;
                return usuariosRepository.getUsuarios();

              case 5:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function usuarios(_x, _x2, _x3) {
        return _usuarios.apply(this, arguments);
      }

      return usuarios;
    }(),
    usuario: function () {
      var _usuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, _ref3, _ref4) {
        var id, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref3.id;
                (0, _objectDestructuringEmpty2["default"])(_ref4);
                _context2.prev = 2;
                _context2.next = 5;
                return usuariosRepository.getUsuario(id);

              case 5:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      function usuario(_x4, _x5, _x6) {
        return _usuario.apply(this, arguments);
      }

      return usuario;
    }(),
    userByUsername: function () {
      var _userByUsername = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(paren, _ref5, _ref6) {
        var username, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                username = _ref5.username;
                (0, _objectDestructuringEmpty2["default"])(_ref6);
                _context3.prev = 2;
                _context3.next = 5;
                return usuariosRepository.getUsuarioUsername(username);

              case 5:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                throw _context3.t0;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }));

      function userByUsername(_x7, _x8, _x9) {
        return _userByUsername.apply(this, arguments);
      }

      return userByUsername;
    }()
  },
  Mutation: {
    createUsuario: function () {
      var _createUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, _ref7, _ref8) {
        var username, fullname, rol, usuario, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                username = _ref7.username, fullname = _ref7.fullname, rol = _ref7.rol;
                (0, _objectDestructuringEmpty2["default"])(_ref8);
                _context4.prev = 2;
                usuario = (0, _model.usuarioModel)(username, fullname, rol, 0);
                _context4.next = 6;
                return usuariosRepository.createUsuario(usuario);

              case 6:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                throw _context4.t0;

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 10]]);
      }));

      function createUsuario(_x10, _x11, _x12) {
        return _createUsuario.apply(this, arguments);
      }

      return createUsuario;
    }(),
    updateUsuario: function () {
      var _updateUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, _ref9, _ref10) {
        var id, username, fullname, rol, multado, multa, usuario, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref9.id, username = _ref9.username, fullname = _ref9.fullname, rol = _ref9.rol, multado = _ref9.multado;
                (0, _objectDestructuringEmpty2["default"])(_ref10);
                _context5.prev = 2;
                multa = multado ? multa : 0;
                usuario = (0, _model.usuarioModel)(username, fullname, rol, multa);
                usuario.id = +id;
                _context5.next = 8;
                return usuariosRepository.updateUsuario(usuario);

              case 8:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](2);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 12]]);
      }));

      function updateUsuario(_x13, _x14, _x15) {
        return _updateUsuario.apply(this, arguments);
      }

      return updateUsuario;
    }(),
    deleteUsuario: function () {
      var _deleteUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, _ref11, _ref12) {
        var id, deletedId;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = _ref11.id;
                (0, _objectDestructuringEmpty2["default"])(_ref12);
                _context6.prev = 2;
                _context6.next = 5;
                return usuariosRepository.deleteUsuario(+id);

              case 5:
                deletedId = _context6.sent;
                return _context6.abrupt("return", deletedId);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](2);
                throw _context6.t0;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 9]]);
      }));

      function deleteUsuario(_x16, _x17, _x18) {
        return _deleteUsuario.apply(this, arguments);
      }

      return deleteUsuario;
    }()
  }
};
exports["default"] = _default;