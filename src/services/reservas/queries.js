export const queries = {
    insert_reserva: `INSERT INTO Library.reservas 
                 (id_libro, id_persona, fecha_checkout, fecha_retorno, fecha_retornado) 
                 VALUES (?, ?, ?, ?, ?)`,
    update_reserva: `UPDATE Library.reservas t1
                  SET id_libro = ?, id_persona = ?, 
                  fecha_checkout = ?, 
                  fecha_retorno = ?, fecha_retornado = ?
                  WHERE t1.id = ?`,
    delete_reserva: `DELETE FROM Library.reservas 
                  WHERE id = ?`,
    get_reservas: `SELECT t3.*, t2.*, t1.id_libro as idLibro, 
                    t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, 
                    t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado
                    FROM Library.reservas t1
                    INNER JOIN Library.books t2 ON t1.id_libro = t2.id
                    INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id`,
    get_reserva: `SELECT t3.*, t2.*, t1.id_libro as idLibro, 
                    t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, 
                    t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado
                    FROM Library.reservas t1
                    INNER JOIN Library.books t2 ON t1.id_libro = t2.id
                    INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id 
                    WHERE t1.id = ?`,
    get_user_reservas: `SELECT t3.*, t2.*, t1.id_libro as idLibro, 
                        t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, 
                        t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado
                        FROM Library.reservas t1
                        INNER JOIN Library.books t2 ON t1.id_libro = t2.id
                        INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id 
                        WHERE idPersona = ?`,
    get_book_reservas: `SELECT t3.*, t2.*, t1.id_libro as idLibro, 
                        t1.id_persona as idPersona, t1.fecha_checkout as fechaCheckout, 
                        t1.fecha_retorno as fechaRetorno, t1.fecha_retornado as fechaRetornado
                        FROM Library.reservas t1
                        INNER JOIN Library.books t2 ON t1.id_libro = t2.id
                        INNER JOIN Library.usuarios t3 ON  t1.id_persona = t3.id 
                        WHERE idLibro = ?`
    }