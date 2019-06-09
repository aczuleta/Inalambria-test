import {usuarioModel} from './model';
import {UsuariosRepository}  from './repository';
const usuariosRepository= UsuariosRepository();

export default {
    Query: {
        usuarios: async (parent, {}, {}) => {
            try{
                const result = await usuariosRepository.getUsuarios();
                return result;
            }catch(err){
                throw err;
            }
        },
        usuario: async (parent, {id}, {}) => {
                try {
                    const result = await usuariosRepository.getUsuario(id);
                    return result;
                }catch(err){
                    throw err;
                }
        },
        userByUsername: async(paren, {username}, {}) => {
            try{
                const result = await usuariosRepository.getUsuarioUsername(username);
                return result;
            }catch(err){
                throw err;
            }
        }
    },
    Mutation: {
        createUsuario: async (parent, {username, fullname, rol}, {}) => {
            try{
                const usuario = usuarioModel(username, fullname, rol, 0);
                const result = await usuariosRepository.createUsuario(usuario);
                return result;
            }catch(err){
                throw err;
            }
        },
        updateUsuario: async (parent, {id, username, fullname, rol, multado}, {}) => {
            try{
                let multa = multado ? multa : 0;
                let usuario = usuarioModel(username, fullname, rol, multa);
                usuario.id = +id;
                const result = await usuariosRepository.updateUsuario(usuario);
                return result;
            }catch(err){
                throw err;
            }
        },
        deleteUsuario: async (parent, {id}, {}) => {
            try{
                const deletedId = await usuariosRepository.deleteUsuario(+id);
                return deletedId;
            }catch(err){
                throw err;
            }
        }
    }
};