import { gql } from 'apollo-server-express';
import fs from 'fs';


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
export default [linkSchema];