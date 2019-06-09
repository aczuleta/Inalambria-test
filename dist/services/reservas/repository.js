"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReservasRepository = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var _queries = require("./queries");

var _model = require("./model");

var _model2 = require("../books/model");

var _model3 = require("../usuarios/model");

var reservasRepository = (0, _dataRepository.dataRepository)("reservas");

var ReservasRepository = function ReservasRepository() {
  function getReservas() {
    return _getReservas.apply(this, arguments);
  }

  function _getReservas() {
    _getReservas = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.get_reservas, []);

            case 3:
              results = _context.sent;
              results = results[0];
              results = results.map(function (reserva) {
                return createVerbose(reserva);
              });
              return _context.abrupt("return", results);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    return _getReservas.apply(this, arguments);
  }

  function getReserva(_x) {
    return _getReserva.apply(this, arguments);
  }

  function _getReserva() {
    _getReserva = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(id) {
      var results, reserva;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.get_reserva, [id]);

            case 3:
              results = _context2.sent;
              reserva = results[0][0];
              return _context2.abrupt("return", createVerbose(reserva));

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return _getReserva.apply(this, arguments);
  }

  function getReservasUsuario(_x2) {
    return _getReservasUsuario.apply(this, arguments);
  }

  function _getReservasUsuario() {
    _getReservasUsuario = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(id) {
      var results, reserva;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.get_user_reservas, [id]);

            case 3:
              results = _context3.sent;
              reserva = results[0][0];
              return _context3.abrupt("return", createVerbose(reserva));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return _getReservasUsuario.apply(this, arguments);
  }

  function getReservasLibro(_x3) {
    return _getReservasLibro.apply(this, arguments);
  }

  function _getReservasLibro() {
    _getReservasLibro = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(id) {
      var results, reserva;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.get_book_reservas, [id]);

            case 3:
              results = _context4.sent;
              reserva = results[0][0];
              return _context4.abrupt("return", createVerbose(reserva));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return _getReservasLibro.apply(this, arguments);
  }

  function updateReserva(_x4) {
    return _updateReserva.apply(this, arguments);
  }

  function _updateReserva() {
    _updateReserva = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(reserva) {
      var editedReserva;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.update_reserva, [reserva.idLibro, reserva.idPersona, reserva.fechaCheckout, reserva.fechaRetorno, reserva.fechaRetornado, reserva.id]);

            case 3:
              editedReserva = _context5.sent;
              return _context5.abrupt("return", reserva.id);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return _updateReserva.apply(this, arguments);
  }

  function createReserva(_x5) {
    return _createReserva.apply(this, arguments);
  }

  function _createReserva() {
    _createReserva = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(reserva) {
      var newReserva;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.insert_reserva, (0, _toConsumableArray2["default"])(Object.values(reserva)));

            case 3:
              newReserva = _context6.sent;
              newReserva = newReserva[0].insertId;
              return _context6.abrupt("return", newReserva);

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }));
    return _createReserva.apply(this, arguments);
  }

  function deleteReserva(_x6) {
    return _deleteReserva.apply(this, arguments);
  }

  function _deleteReserva() {
    _deleteReserva = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(id) {
      var newReserva;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return reservasRepository.getRawConnection().raw(_queries.queries.delete_reserva, [id]);

            case 3:
              newReserva = _context7.sent;
              return _context7.abrupt("return", id);

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return _deleteReserva.apply(this, arguments);
  }

  function createVerbose(reserva) {
    var persona = (0, _model3.usuarioModel)(reserva.username, reserva.fullname, reserva.rol, reserva.multado);
    var libro = (0, _model2.bookModel)(reserva.title, reserva.ISBN, reserva.quantity, reserva.genre, reserva.author, reserva.pages);
    var verbose = (0, _model.verboseReservaModel)(reserva.id, reserva.idLibro, reserva.idPersona, reserva.fechaCheckout, reserva.fechaRetorno, reserva.fechaRetornado, persona, libro);
    return verbose;
  }

  return {
    createReserva: createReserva,
    deleteReserva: deleteReserva,
    getReserva: getReserva,
    getReservas: getReservas,
    getReservasLibro: getReservasLibro,
    getReservasUsuario: getReservasUsuario,
    updateReserva: updateReserva
  };
};

exports.ReservasRepository = ReservasRepository;