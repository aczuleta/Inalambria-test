"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookModel = void 0;

var bookModel = function bookModel(title, ISBN, quantity, genre, author, pages) {
  return {
    title: title,
    ISBN: ISBN,
    quantity: quantity,
    genre: genre,
    author: author,
    pages: pages
  };
};

exports.bookModel = bookModel;