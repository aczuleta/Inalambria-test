import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        usuarios: [usuario]!,
        usuario(id:ID!): usuario!,
        userByUsername(username:String!):usuario!
    }

    extend type Mutation {
        createUsuario(username:String!, fullname:String!, rol:String!): ID!,
        updateUsuario(id:ID!, username:String!, fullname:String!, rol:String!, multado:Boolean): ID!,
        deleteUsuario(id:ID!):ID!
    }
    
    type usuario {
        id: ID!
        username: String!
        fullname: String!
        rol: String!
        multado: Boolean!
    }
`;