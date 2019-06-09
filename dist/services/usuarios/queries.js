"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  insert_usuario: "INSERT INTO Library.usuarios \n                 (username, fullname, rol, multado) \n                 VALUES (?, ?, ?, ?)",
  update_usuario: "UPDATE Library.usuarios t1\n                  SET username = ?, fullname = ?,  \n                  rol = ?, multado = ?\n                  WHERE t1.id = ?",
  delete_usuario: "DELETE FROM Library.usuarios \n                  WHERE id = ?"
};
exports.queries = queries;