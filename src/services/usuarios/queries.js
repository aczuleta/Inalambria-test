export const queries = {

    insert_usuario: `INSERT INTO Library.usuarios 
                 (username, fullname, rol, multado) 
                 VALUES (?, ?, ?, ?)`,

    update_usuario: `UPDATE Library.usuarios t1
                  SET username = ?, fullname = ?,  
                  rol = ?, multado = ?
                  WHERE t1.id = ?`,

    delete_usuario: `DELETE FROM Library.usuarios 
                  WHERE id = ?`
}