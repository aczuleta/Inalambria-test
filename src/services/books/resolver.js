import {bookModel} from './model';
import {BooksRepository}  from './repository';
const booksRepository= BooksRepository();

export default {
    Query: {
        books: async (parent, {}, {}) => {
            try{
                const result = await booksRepository.getBooks();
                return result;
            }catch(err){
                throw err;
            }
        },
        book: async (parent, {id}, {}) => {
                try {
                    const result = await booksRepository.getBook(id);
                    return result;
                }catch(err){
                    throw err;
                }
        }
    },
    Mutation: {
        createBook: async (parent, {title, ISBN, quantity, genre, author, pages}, {}) => {
            try{
                const book = bookModel(title, ISBN, quantity, genre, author, pages);
                const result = await booksRepository.createBook(book);
                return result;
            }catch(err){
                throw err;
            }
        },
        updateBook: async (parent, {id, title, ISBN, quantity, genre, author, pages}, {}) => {
            try{
                let book = bookModel(title, ISBN, quantity, genre, author, pages);
                book.id = +id;
                const result = await booksRepository.updateBook(book);
                return result;
            }catch(err){
                throw err;
            }
        },
        deleteBook: async (parent, {id}, {}) => {
            try{
                const deletedId = await booksRepository.deleteBook(+id);
                return deletedId;
            }catch(err){
                throw err;
            }
        }
    }
};