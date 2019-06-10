import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';
import {bookModel} from './model';
import {bookFunction} from './function';

const booksRepository = dataRepository("books");
const fn = bookFunction();

export const BooksRepository = () => {
    

    async function getBooks(){
        try{
            let results = await booksRepository.getRawConnection().raw(queries.get_books, []);
            return results[0];
        } catch(err){
            throw err;
        }
    }

    async function getBook(id){
        try{
            let results = await booksRepository.getRawConnection().raw(queries.get_book, [id]);
            return results[0][0];
        } catch(err){
            throw err;
        }
    }

    async function updateBook(book){
        try{
            let url;
            if(!book.cover.includes("techtest-aczc.s3.us-west-2.amazonaws.com")) {
                url = await fn.uploadToS3(book.cover, book.title);
                url = url.imageUrl;
            } else {
                url = book.cover;
            }
            book.cover = url;
            let editedBook = 
            await booksRepository.getRawConnection().raw(queries.update_book, 
            [book.title, book.ISBN, book.quantity, book.genre, book.author, book.pages, book.cover, book.id]);
            return book.id;
        } catch(err){
            throw err;
        }
    }

    async function createBook(book){
        try{
            let url = book.cover ? await fn.uploadToS3(book.cover, book.title) : "";
            url = url ? url.imageUrl : "";
            book.cover = url;
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