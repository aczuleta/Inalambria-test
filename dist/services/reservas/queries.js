"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  insert_reserva: "INSERT INTO Library.reservas \n                 (id_libro, id_persona, fecha_checkout, fecha_retorno, fecha_retornado) \n                 VALUES (?, ?, ?, ?, ?)",
  update_reserva: "UPDATE Library.reservas t1\n                  SET id_libro = ?, id_persona = ?, \n                  fecha_checkout = ?, \n                  fecha_retorno = ?, fecha_retornado = ?\n                  WHERE t1.id = ?",
  delete_reserva: "DELETE FROM Library.reservas \n                  WHERE id = ?",
  get_reservas: "SELECT t3.*, t2.*, t1.id_libro as idLibro, \n                    t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, \n                    t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado\n                    FROM Library.reservas t1\n                    INNER JOIN Library.books t2 ON t1.id_libro = t2.id\n                    INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id",
  get_reserva: "SELECT t3.*, t2.*, t1.id_libro as idLibro, \n                    t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, \n                    t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado\n                    FROM Library.reservas t1\n                    INNER JOIN Library.books t2 ON t1.id_libro = t2.id\n                    INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id \n                    WHERE t1.id = ?",
  get_user_reservas: "SELECT t3.*, t2.*, t1.id_libro as idLibro, \n                        t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, \n                        t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado\n                        FROM Library.reservas t1\n                        INNER JOIN Library.books t2 ON t1.id_libro = t2.id\n                        INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id \n                        WHERE idPersona = ?",
  get_book_reservas: "SELECT t3.*, t2.*, t1.id_libro as idLibro, \n                        t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, \n                        t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado\n                        FROM Library.reservas t1\n                        INNER JOIN Library.books t2 ON t1.id_libro = t2.id\n                        INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id \n                        WHERE idLibro = ?"
};
exports.queries = queries;