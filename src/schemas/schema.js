import { gql } from 'apollo-server-express';
import bookSchema from '../services/books/schema';
import usuarioSchema from '../services/usuarios/schema';
import reservaSchema from '../services/reservas/schema';



const dirServices = '../services';
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

let exports = [linkSchema];
export default [linkSchema, bookSchema, usuarioSchema, reservaSchema];