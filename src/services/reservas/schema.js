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
        createReserva(idPersona:ID!, idLibro:ID!): ID!,
        returnBook(id:ID!): ID!,
        deleteReserva(id:ID!):ID!
    }

    scalar GraphQLDateTime
    
    type reserva {
        id: ID!
        idPersona: ID!
        idLibro: ID!,
        persona: usuario!,
        libro: book!
        fechaCheckout: GraphQLDateTime!, 
        fechaRetorno: GraphQLDateTime!, 
        fechaRetornado: GraphQLDateTime
    }
`;