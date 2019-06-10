export const queries = {
    insert_book: `INSERT INTO Library.books 
                 (title, ISBN, quantity, genre, author, pages, cover) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
    update_book: `UPDATE Library.books t1
                  SET title = ?, ISBN = ?, quantity = ?, 
                  genre = ?, author = ?,
                  pages = ?, cover = ?
                  WHERE t1.id = ?`,
    delete_book: `DELETE FROM Library.books 
                  WHERE id = ?`,
    get_books: `SELECT * FROM Library.books`,
    get_book: `SELECT * FROM Library.books t1
               WHERE t1.id = ?`
}