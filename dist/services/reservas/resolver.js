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

var _repository2 = require("../books/repository");

var _repository3 = require("../usuarios/repository");

var _moment = _interopRequireDefault(require("moment"));

var reservasRepository = (0, _repository.ReservasRepository)();
var bookRepository = (0, _repository2.BooksRepository)();
var usuarioRepository = (0, _repository3.UsuariosRepository)();
var _default = {
  Query: {
    //Este método retorna todas las reservas 
    reservas: function () {
      var _reservas = (0, _asyncToGenerator2["default"])(
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
                return reservasRepository.getReservas();

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

      function reservas(_x, _x2, _x3) {
        return _reservas.apply(this, arguments);
      }

      return reservas;
    }(),
    //Este método retorna una reserva en específico
    reserva: function () {
      var _reserva = (0, _asyncToGenerator2["default"])(
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
                return reservasRepository.getReserva(id);

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

      function reserva(_x4, _x5, _x6) {
        return _reserva.apply(this, arguments);
      }

      return reserva;
    }(),
    //Este método retorna todas las reservas asociadas a un usuario en particular
    reservasUsuario: function () {
      var _reservasUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, _ref5, _ref6) {
        var usuario, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                usuario = _ref5.usuario;
                (0, _objectDestructuringEmpty2["default"])(_ref6);
                _context3.prev = 2;
                _context3.next = 5;
                return reservasRepository.getReservasUsuario(usuario);

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

      function reservasUsuario(_x7, _x8, _x9) {
        return _reservasUsuario.apply(this, arguments);
      }

      return reservasUsuario;
    }(),
    //Este método retorna todas las reservas asociadas a un libro en particular
    reservasLibro: function () {
      var _reservasLibro = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, _ref7, _ref8) {
        var libro, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                libro = _ref7.libro;
                (0, _objectDestructuringEmpty2["default"])(_ref8);
                _context4.prev = 2;
                _context4.next = 5;
                return reservasRepository.getReservasLibro(libro);

              case 5:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                throw _context4.t0;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      function reservasLibro(_x10, _x11, _x12) {
        return _reservasLibro.apply(this, arguments);
      }

      return reservasLibro;
    }()
  },
  Mutation: {
    createReserva: function () {
      var _createReserva = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, _ref9, _ref10) {
        var idLibro, idPersona, book, persona, checkout, returnDate, reserva, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                idLibro = _ref9.idLibro, idPersona = _ref9.idPersona;
                (0, _objectDestructuringEmpty2["default"])(_ref10);
                _context5.prev = 2;
                _context5.next = 5;
                return bookRepository.getBook(idLibro);

              case 5:
                book = _context5.sent;

                if (!(book.quantity === 0)) {
                  _context5.next = 8;
                  break;
                }

                throw {
                  error: "No hay unidades disponibles de este libro en este momento"
                };

              case 8:
                _context5.next = 10;
                return usuarioRepository.getUsuario(idPersona);

              case 10:
                persona = _context5.sent;

                if (!persona.multado) {
                  _context5.next = 13;
                  break;
                }

                throw {
                  error: "Este usuario se encuentra multado."
                };

              case 13:
                /*
                * Si hay unidades dispnibles entonces modificamos el libro, le restamos una unidad
                * que equivale a la reserva que estamos por hacer
                **/
                book.quantity--;
                _context5.next = 16;
                return bookRepository.updateBook(book);

              case 16:
                /**
                 * Finalmente sí procedemos a realizar la reserva 
                 */
                checkout = (0, _moment["default"])().format("YYYY-MM-DD HH:mm:ss");
                checkout = new Date(checkout); //Por defecto en estos momentos la fecha de retorno está a 7 días, podría ser parametrizable

                returnDate = (0, _moment["default"])().add(7, 'days').format("YYYY-MM-DD HH:mm:ss");
                returnDate = new Date(returnDate);
                reserva = (0, _model.reservaModel)(idLibro, idPersona, checkout, returnDate, null);
                _context5.next = 23;
                return reservasRepository.createReserva(reserva);

              case 23:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 27:
                _context5.prev = 27;
                _context5.t0 = _context5["catch"](2);
                throw _context5.t0;

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 27]]);
      }));

      function createReserva(_x13, _x14, _x15) {
        return _createReserva.apply(this, arguments);
      }

      return createReserva;
    }(),
    returnBook: function () {
      var _returnBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, _ref11, _ref12) {
        var id, reserva, checkout, result, retornado, multa, persona, book;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = _ref11.id;
                (0, _objectDestructuringEmpty2["default"])(_ref12);
                _context6.prev = 2;
                _context6.next = 5;
                return reservasRepository.getReserva(id);

              case 5:
                reserva = _context6.sent;
                //Generamos la fecha de retorno del libro
                checkout = (0, _moment["default"])().format("YYYY-MM-DD HH:mm:ss");
                reserva.fechaRetornado = checkout;
                reserva.fechaRetorno = (0, _moment["default"])(reserva.fechaRetorno).format("YYYY-MM-DD HH:mm:ss");
                reserva.fechaCheckout = (0, _moment["default"])(reserva.fechaCheckout).format("YYYY-MM-DD HH:mm:ss");
                _context6.next = 12;
                return reservasRepository.updateReserva(reserva);

              case 12:
                result = _context6.sent;
                checkout = new Date(checkout);
                retornado = new Date(reserva.fechaRetorno); //Comparamos si lo regreso a tiempo o no para generar multa

                multa = checkout > retornado ? 1 : 0; //Obtenemos la persona para modificarla 

                _context6.next = 18;
                return usuarioRepository.getUsuario(reserva.idPersona);

              case 18:
                persona = _context6.sent;

                if (!(persona.multado != multa)) {
                  _context6.next = 23;
                  break;
                }

                persona.multado = multa;
                _context6.next = 23;
                return usuarioRepository.updateUsuario(persona);

              case 23:
                _context6.next = 25;
                return bookRepository.getBook(reserva.idLibro);

              case 25:
                book = _context6.sent;
                book.quantity++;
                _context6.next = 29;
                return bookRepository.updateBook(book);

              case 29:
                return _context6.abrupt("return", result);

              case 32:
                _context6.prev = 32;
                _context6.t0 = _context6["catch"](2);
                throw _context6.t0;

              case 35:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 32]]);
      }));

      function returnBook(_x16, _x17, _x18) {
        return _returnBook.apply(this, arguments);
      }

      return returnBook;
    }(),
    deleteReserva: function () {
      var _deleteReserva = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, _ref13, _ref14) {
        var id, deletedId;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = _ref13.id;
                (0, _objectDestructuringEmpty2["default"])(_ref14);
                _context7.prev = 2;
                _context7.next = 5;
                return reservasRepository.deleteReserva(+id);

              case 5:
                deletedId = _context7.sent;
                return _context7.abrupt("return", deletedId);

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](2);
                throw _context7.t0;

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 9]]);
      }));

      function deleteReserva(_x19, _x20, _x21) {
        return _deleteReserva.apply(this, arguments);
      }

      return deleteReserva;
    }()
  }
};
exports["default"] = _default;