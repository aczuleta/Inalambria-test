"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookModel = void 0;

var bookModel = function bookModel(title, ISBN, quantity, genre, author, pages) {
  var cover = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
  return {
    title: title,
    ISBN: ISBN,
    quantity: quantity,
    genre: genre,
    author: author,
    pages: pages,
    cover: cover
  };
};

exports.bookModel = bookModel;