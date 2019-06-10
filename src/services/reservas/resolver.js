import {reservaModel} from './model';
import {ReservasRepository}  from './repository';
import {BooksRepository} from '../books/repository';
import {UsuariosRepository} from '../usuarios/repository';
import moment from 'moment';
const reservasRepository= ReservasRepository();
const bookRepository =  BooksRepository();
const usuarioRepository = UsuariosRepository();

export default {
    Query: {
        //Este método retorna todas las reservas 
        reservas: async (parent, {}, {}) => {
            try{
                const result = await reservasRepository.getReservas();
                return result;
            }catch(err){
                throw err;
            }
        },
        //Este método retorna una reserva en específico
        reserva: async (parent, {id}, {}) => {
                try {
                    const result = await reservasRepository.getReserva(id);
                    return result;
                }catch(err){
                    throw err;
                }
        },
        //Este método retorna todas las reservas asociadas a un usuario en particular
        reservasUsuario: async (parent, {usuario}, {}) => {
            try {
                const result = await reservasRepository.getReservasUsuario(usuario);
                return result;
            }catch(err){
                throw err;
            }
        },
        //Este método retorna todas las reservas asociadas a un libro en particular
        reservasLibro: async (parent, {libro}, {}) => {
            try {
                const result = await reservasRepository.getReservasLibro(libro);
                return result;
            }catch(err){
                throw err;
            }
        }
    },
    Mutation: {
        createReserva: async (parent, {idLibro, idPersona}, {}) => {
            try{

                //primero validamos que que haya suficientes unidades del libro que buscamos
                let book = await bookRepository.getBook(idLibro);
                if(book.quantity === 0){
                    throw {
                        error: "No hay unidades disponibles de este libro en este momento"
                    }
                } 


                //En segundo lugar tenemos que verificar si la persona está multada o no
                let persona = await usuarioRepository.getUsuario(idPersona);
                if(persona.multado){
                    throw {
                        error: "Este usuario se encuentra multado."
                    }
                }

                /*
                * Si hay unidades dispnibles entonces modificamos el libro, le restamos una unidad
                * que equivale a la reserva que estamos por hacer
                **/
                book.quantity--;
                console.log("este es el libro", book);
                await bookRepository.updateBook(book);

                /**
                 * Finalmente sí procedemos a realizar la reserva 
                 */
                let checkout = moment().format("YYYY-MM-DD HH:mm:ss");
                checkout = new Date(checkout);

                //Por defecto en estos momentos la fecha de retorno está a 7 días, podría ser parametrizable
                let returnDate = moment().add(7, 'days').format("YYYY-MM-DD HH:mm:ss");
                returnDate = new Date(returnDate);
                const reserva = reservaModel(idLibro, idPersona, checkout, returnDate, null);
                const result = await reservasRepository.createReserva(reserva);
                return result;
            }catch(err){
                throw err;
            }
        },
        returnBook: async (parent, {id}, {}) => {
            try {
                 // Primero recuperamos la reserva
                 let reserva =  await reservasRepository.getReserva(id);

                 //Generamos la fecha de retorno del libro
                 let checkout = moment().format("YYYY-MM-DD HH:mm:ss");

                 reserva.fechaRetornado = checkout;

                 reserva.fechaRetorno = moment(reserva.fechaRetorno).format("YYYY-MM-DD HH:mm:ss");

                 reserva.fechaCheckout = moment(reserva.fechaCheckout).format("YYYY-MM-DD HH:mm:ss");

                 const result = await reservasRepository.updateReserva(reserva);

                 checkout = new Date(checkout);
                 let retornado = new Date(reserva.fechaRetorno);

                 //Comparamos si lo regreso a tiempo o no para generar multa
                 let multa = (checkout > retornado) ? 1 : 0;

                 //Obtenemos la persona para modificarla 
                 let persona = await usuarioRepository.getUsuario(reserva.idPersona);

                 //Actualizamos la multa de la persona
                 if(persona.multado != multa){
                    persona.multado = multa;
                    await usuarioRepository.updateUsuario(persona);
                 }
                 
                 //Procedemos a devolver el libro, actualizando su cantidad disponible
                 let book = await bookRepository.getBook(+reserva.idLibro);
                 book.quantity++;
                 await bookRepository.updateBook(book);

                return result;               
            }catch(err){
                throw err;
            }
        },
        deleteReserva: async (parent, {id}, {}) => {
            try{
                const deletedId = await reservasRepository.deleteReserva(+id);
                return deletedId;
            }catch(err){
                throw err;
            }
        }
    }
};