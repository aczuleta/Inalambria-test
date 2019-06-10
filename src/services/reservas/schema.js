import { gql } from 'apollo-server-express';
import { GraphQLDateTime }  from 'graphql-iso-date';
export default gql`
    

    extend type Query {
        reservas: [reserva]!,
        reserva(id:ID!): reserva!,
        reservasUsuario(usuario:ID!):[reserva]!,
        reservasLibro(libro:ID!):[reserva]!
    }

    extend type Mutation {
        createReserva(idPersona:Int!, idLibro:Int!): ID!,
        returnBook(id:ID!): ID!,
        deleteReserva(id:ID!):ID!
    }

    type reserva {
        id: ID!
        idPersona: Int!
        idLibro: Int!,
        persona: usuario!,
        libro: book!
        fechaCheckout: String!, 
        fechaRetorno: String!, 
        fechaRetornado: String
    }
`;