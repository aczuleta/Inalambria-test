export const queries = {

    insert_usuario: `INSERT INTO Library.usuarios 
                 (username, fullname, rol, multado) 
                 VALUES (?, ?, ?, ?)`,

    update_usuario: `UPDATE Library.usuarios t1
                  SET username = ?, fullname = ?,  
                  rol = ?, multado = ?
                  WHERE t1.id = ?`,

    delete_usuario: `DELETE FROM Library.usuarios 
                  WHERE id = ?`,
    get_by_name: `SELECT * FROM Library.usuarios t1
                WHERE t1.username = ?`,
    get_usuario: `SELECT * FROM Library.usuarios t1
                 WHERE t1.id = ?`
}