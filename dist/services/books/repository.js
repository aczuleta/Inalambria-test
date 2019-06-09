"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksRepository = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var _queries = require("./queries");

var _model = require("./model");

var booksRepository = (0, _dataRepository.dataRepository)("books");

var BooksRepository = function BooksRepository() {
  function getBooks() {
    return _getBooks.apply(this, arguments);
  }

  function _getBooks() {
    _getBooks = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return booksRepository.retrieve();

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
    return _getBooks.apply(this, arguments);
  }

  function getBook(_x) {
    return _getBook.apply(this, arguments);
  }

  function _getBook() {
    _getBook = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(id) {
      var results;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return booksRepository.retrieve({
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
    return _getBook.apply(this, arguments);
  }

  function updateBook(_x2) {
    return _updateBook.apply(this, arguments);
  }

  function _updateBook() {
    _updateBook = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(book) {
      var editedBook;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return booksRepository.getRawConnection().raw(_queries.queries.update_book, [book.title, book.ISBN, book.quantity, book.genre, book.author, book.pages, book.id]);

            case 3:
              editedBook = _context3.sent;
              return _context3.abrupt("return", book.id);

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
    return _updateBook.apply(this, arguments);
  }

  function createBook(_x3) {
    return _createBook.apply(this, arguments);
  }

  function _createBook() {
    _createBook = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(book) {
      var newBook;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return booksRepository.getRawConnection().raw(_queries.queries.insert_book, (0, _toConsumableArray2["default"])(Object.values(book)));

            case 3:
              newBook = _context4.sent;
              newBook = newBook[0].insertId;
              return _context4.abrupt("return", newBook);

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
    return _createBook.apply(this, arguments);
  }

  function deleteBook(_x4) {
    return _deleteBook.apply(this, arguments);
  }

  function _deleteBook() {
    _deleteBook = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(id) {
      var newBook;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return booksRepository.getRawConnection().raw(_queries.queries.delete_book, [id]);

            case 3:
              newBook = _context5.sent;
              return _context5.abrupt("return", id);

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
    return _deleteBook.apply(this, arguments);
  }

  return {
    createBook: createBook,
    deleteBook: deleteBook,
    getBook: getBook,
    getBooks: getBooks,
    updateBook: updateBook
  };
};

exports.BooksRepository = BooksRepository;