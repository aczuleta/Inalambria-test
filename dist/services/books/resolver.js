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

var booksRepository = (0, _repository.BooksRepository)();
var _default = {
  Query: {
    books: function () {
      var _books = (0, _asyncToGenerator2["default"])(
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
                return booksRepository.getBooks();

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

      function books(_x, _x2, _x3) {
        return _books.apply(this, arguments);
      }

      return books;
    }(),
    book: function () {
      var _book = (0, _asyncToGenerator2["default"])(
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
                return booksRepository.getBook(id);

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

      function book(_x4, _x5, _x6) {
        return _book.apply(this, arguments);
      }

      return book;
    }()
  },
  Mutation: {
    createBook: function () {
      var _createBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, _ref5, _ref6) {
        var title, ISBN, quantity, genre, author, pages, img, book, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                title = _ref5.title, ISBN = _ref5.ISBN, quantity = _ref5.quantity, genre = _ref5.genre, author = _ref5.author, pages = _ref5.pages, img = _ref5.img;
                (0, _objectDestructuringEmpty2["default"])(_ref6);
                _context3.prev = 2;
                book = (0, _model.bookModel)(title, ISBN, quantity, genre, author, pages, img);
                _context3.next = 6;
                return booksRepository.createBook(book);

              case 6:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                throw _context3.t0;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 10]]);
      }));

      function createBook(_x7, _x8, _x9) {
        return _createBook.apply(this, arguments);
      }

      return createBook;
    }(),
    updateBook: function () {
      var _updateBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, _ref7, _ref8) {
        var id, title, ISBN, quantity, genre, author, pages, book, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref7.id, title = _ref7.title, ISBN = _ref7.ISBN, quantity = _ref7.quantity, genre = _ref7.genre, author = _ref7.author, pages = _ref7.pages;
                (0, _objectDestructuringEmpty2["default"])(_ref8);
                _context4.prev = 2;
                book = (0, _model.bookModel)(title, ISBN, quantity, genre, author, pages);
                book.id = +id;
                _context4.next = 7;
                return booksRepository.updateBook(book);

              case 7:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](2);
                throw _context4.t0;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 11]]);
      }));

      function updateBook(_x10, _x11, _x12) {
        return _updateBook.apply(this, arguments);
      }

      return updateBook;
    }(),
    deleteBook: function () {
      var _deleteBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, _ref9, _ref10) {
        var id, deletedId;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref9.id;
                (0, _objectDestructuringEmpty2["default"])(_ref10);
                _context5.prev = 2;
                _context5.next = 5;
                return booksRepository.deleteBook(+id);

              case 5:
                deletedId = _context5.sent;
                return _context5.abrupt("return", deletedId);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                throw _context5.t0;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 9]]);
      }));

      function deleteBook(_x13, _x14, _x15) {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }
};
exports["default"] = _default;