import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        books: [book]!,
        book(id:ID!): book!
    }

    extend type Mutation {
        createBook(title:String!, ISBN:String!, quantity:Int!, genre:String!, author:String!, pages:Int!): ID!,
        updateBook(id:ID!, title:String!, ISBN:String!, quantity:Int!, genre:String!, author:String!, pages:Int!): ID!,
        deleteBook(id:ID!):ID!
    }
    
    type book {
        id: ID!
        title: String!
        ISBN: String!
        quantity: Int!
        genre: String!
        author: String!
        pages: Int!
    }
`;