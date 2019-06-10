"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  insert_book: "INSERT INTO Library.books \n                 (title, ISBN, quantity, genre, author, pages, cover) \n                 VALUES (?, ?, ?, ?, ?, ?, ?)",
  update_book: "UPDATE Library.books t1\n                  SET title = ?, ISBN = ?, quantity = ?, \n                  genre = ?, author = ?,\n                  pages = ?, cover = ?\n                  WHERE t1.id = ?",
  delete_book: "DELETE FROM Library.books \n                  WHERE id = ?",
  get_books: "SELECT * FROM Library.books",
  get_book: "SELECT * FROM Library.books t1\n               WHERE t1.id = ?"
};
exports.queries = queries;