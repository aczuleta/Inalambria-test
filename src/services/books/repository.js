import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';
import {bookModel} from './model';

const booksRepository = dataRepository("books");

export const BooksRepository = () => {
    
    async function getBooks(){
        try{
            let results = await booksRepository.retrieve();
            return results;
        } catch(err){
            throw err;
        }
    }

    async function getBook(id){
        try{
            let results = await booksRepository.retrieve({id});
            return results[0];
        } catch(err){
            throw err;
        }
    }

    async function updateBook(book){
        try{
            let editedBook = 
            await booksRepository.getRawConnection().raw(queries.update_book, 
            [book.title, book.ISBN, book.quantity, book.genre, book.author, book.pages, book.id]);
            return book.id;
        } catch(err){
            throw err;
        }
    }

    async function createBook(book){
        try{
            let newBook = await booksRepository.getRawConnection().raw(queries.insert_book, [...Object.values(book)]);
            newBook = newBook[0].insertId;
            return newBook;
        }catch(err){
            throw err;
        }
    }

    async function deleteBook(id){
        try{
            let newBook = await booksRepository.getRawConnection().raw(queries.delete_book, [id]);
            return id;
        }catch(err){
            throw err;
        }
    }
    
    return {
        createBook,
        deleteBook,
        getBook,
        getBooks,
        updateBook

    }
}