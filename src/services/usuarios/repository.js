import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';
import {usuarioModel} from './model';

const usuariosRepository = dataRepository("usuarios");

export const UsuariosRepository = () => {
    
    async function getUsuarios(){
        try{
            let results = await usuariosRepository.retrieve();
            return results;
        } catch(err){
            throw err;
        }
    }

    async function getUsuario(id){
        try{
            let results = await usuariosRepository.getRawConnection().raw(queries.get_usuario,[id]);
            return results[0][0];
        } catch(err){
            throw err;
        }
    }

    async function getUsuarioUsername(username){
        try{
            let results = await usuariosRepository.getRawConnection().raw(queries.get_by_name, [username]);
            return results[0][0];
        } catch(err){
            throw err;
        }
    }

    async function updateUsuario(usuario){
        try{
            let editedusuario = 
            await usuariosRepository.getRawConnection().raw(queries.update_usuario, 
            [usuario.username, usuario.fullname, usuario.rol, usuario.multado, usuario.id]);
            return usuario.id;
        } catch(err){
            throw err;
        }
    }

    async function createUsuario(usuario){
        try{
            let newusuario = await usuariosRepository.getRawConnection().raw(queries.insert_usuario, [...Object.values(usuario)]);
            newusuario = newusuario[0].insertId;
            return newusuario;
        }catch(err){
            throw err;
        }
    }

    async function deleteUsuario(id){
        try{
            let newusuario = await usuariosRepository.getRawConnection().raw(queries.delete_usuario, [id]);
            return id;
        }catch(err){
            throw err;
        }
    }
    
    return {
        createUsuario,
        deleteUsuario,
        getUsuario,
        getUsuarios,
        getUsuarioUsername,
        updateUsuario

    }
}