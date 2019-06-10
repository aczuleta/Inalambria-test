import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';
import {reservaModel, verboseReservaModel} from './model';
import {bookModel} from '../books/model';
import {usuarioModel} from '../usuarios/model';

const reservasRepository = dataRepository("reservas");

export const ReservasRepository = () => {
    
    async function getReservas(){
        try{
            let results = 
            await reservasRepository.getRawConnection().raw(queries.get_reservas, []);
            results = results[0];
            results = results.map(reserva => {
                return createVerbose(reserva);
            });
            return results;
        } catch(err){
            throw err;
        }
    }

    async function getReserva(id){
        try{
            let results = 
            await reservasRepository.getRawConnection().raw(queries.get_reserva, [id]);
            let reserva = results[0][0];
            return createVerbose(reserva);
        } catch(err){
            throw err;
        }
    }

    async function getReservasUsuario(id){
        try{
            let results = 
            await reservasRepository.getRawConnection().raw(queries.get_user_reservas, [id]);
            let reservas = results[0];
            results = reservas.map(reserva => {
                return createVerbose(reserva);
            });
            return results;
        } catch(err){
            throw err;
        }
    }

    async function getReservasLibro(id){
        try{
            let results = 
            await reservasRepository.getRawConnection().raw(queries.get_book_reservas, [+id]);
            let reservas = results[0];
            results = reservas.map(reserva => {
                return createVerbose(reserva);
            });
            return results;
        } catch(err){
            throw err;
        }
    }

    async function updateReserva(reserva){
        try{
            let editedReserva = 
            await reservasRepository.getRawConnection().raw(queries.update_reserva, 
            [reserva.idLibro, reserva.idPersona, reserva.fechaCheckout, 
            reserva.fechaRetorno, reserva.fechaRetornado, reserva.id]);
            return reserva.id;
        } catch(err){
            throw err;
        }
    }

    async function createReserva(reserva){
        try{
            let newReserva = await reservasRepository.getRawConnection().raw(queries.insert_reserva, [...Object.values(reserva)]);
            newReserva = newReserva[0].insertId;
            return newReserva;
        }catch(err){
            throw err;
        }
    }

    async function deleteReserva(id){
        try{
            let newReserva = await reservasRepository.getRawConnection().raw(queries.delete_reserva, [id]);
            return id;
        }catch(err){
            throw err;
        }
    }

    function createVerbose(reserva){
        const persona = usuarioModel(reserva.username, reserva.fullname, 
        reserva.rol, reserva.multado);

        const libro = bookModel(reserva.title, reserva.ISBN,
        reserva.quantity, reserva.genre, reserva.author, reserva.pages, reserva.cover);

        const verbose = verboseReservaModel(reserva.id, reserva.idLibro, reserva.idPersona,
        reserva.fechaCheckout, reserva.fechaRetorno, reserva.fechaRetornado, persona, libro);

        return verbose;
    }
    
    return {
        createReserva,
        deleteReserva,
        getReserva,
        getReservas,
        getReservasLibro,
        getReservasUsuario,
        updateReserva
    }
}