export const bookModel = (title, ISBN, quantity, genre, author, pages, cover = "") => {
    return {
        title,
        ISBN,
        quantity,
        genre,
        author,
        pages,
        cover
    }
}

