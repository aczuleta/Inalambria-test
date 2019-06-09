"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuariosRepository = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var _queries = require("./queries");

var _model = require("./model");

var usuariosRepository = (0, _dataRepository.dataRepository)("usuarios");

var UsuariosRepository = function UsuariosRepository() {
  function getUsuarios() {
    return _getUsuarios.apply(this, arguments);
  }

  function _getUsuarios() {
    _getUsuarios = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return usuariosRepository.retrieve();

            case 3:
              results = _context.sent;
              return _context.abrupt("return", results);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _getUsuarios.apply(this, arguments);
  }

  function getUsuario(_x) {
    return _getUsuario.apply(this, arguments);
  }

  function _getUsuario() {
    _getUsuario = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(id) {
      var results;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return usuariosRepository.retrieve({
                id: id
              });

            case 3:
              results = _context2.sent;
              return _context2.abrupt("return", results[0]);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _getUsuario.apply(this, arguments);
  }

  function getUsuarioUsername(_x2) {
    return _getUsuarioUsername.apply(this, arguments);
  }

  function _getUsuarioUsername() {
    _getUsuarioUsername = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(username) {
      var results;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return usuariosRepository.retrieve({
                username: username
              });

            case 3:
              results = _context3.sent;
              return _context3.abrupt("return", results[0]);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return _getUsuarioUsername.apply(this, arguments);
  }

  function updateUsuario(_x3) {
    return _updateUsuario.apply(this, arguments);
  }

  function _updateUsuario() {
    _updateUsuario = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(usuario) {
      var editedusuario;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return usuariosRepository.getRawConnection().raw(_queries.queries.update_usuario, [usuario.username, usuario.fullname, usuario.rol, usuario.multado, usuario.id]);

            case 3:
              editedusuario = _context4.sent;
              return _context4.abrupt("return", usuario.id);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return _updateUsuario.apply(this, arguments);
  }

  function createUsuario(_x4) {
    return _createUsuario.apply(this, arguments);
  }

  function _createUsuario() {
    _createUsuario = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(usuario) {
      var newusuario;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return usuariosRepository.getRawConnection().raw(_queries.queries.insert_usuario, (0, _toConsumableArray2["default"])(Object.values(usuario)));

            case 3:
              newusuario = _context5.sent;
              newusuario = newusuario[0].insertId;
              return _context5.abrupt("return", newusuario);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));
    return _createUsuario.apply(this, arguments);
  }

  function deleteUsuario(_x5) {
    return _deleteUsuario.apply(this, arguments);
  }

  function _deleteUsuario() {
    _deleteUsuario = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(id) {
      var newusuario;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return usuariosRepository.getRawConnection().raw(_queries.queries.delete_usuario, [id]);

            case 3:
              newusuario = _context6.sent;
              return _context6.abrupt("return", id);

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return _deleteUsuario.apply(this, arguments);
  }

  return {
    createUsuario: createUsuario,
    deleteUsuario: deleteUsuario,
    getUsuario: getUsuario,
    getUsuarios: getUsuarios,
    getUsuarioUsername: getUsuarioUsername,
    updateUsuario: updateUsuario
  };
};

exports.UsuariosRepository = UsuariosRepository;