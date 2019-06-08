import express from 'express';
import uuidv4 from 'uuid/v4';
import { ApolloServer} from 'apollo-server-express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import schema from '../schemas/schema';
import resolvers from '../resolvers/resolver';


const Server = () => {
    
    require('dotenv').config();

    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(helmet.noCache());
    app.use(helmet.frameguard());
    app.use(helmet.noSniff());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/json' }));

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        context: {},
    });

    function start(){
        server.applyMiddleware({ app, path: '/graphql' });
        app.listen({ port: 8000 }, () => {
            console.log('Apollo Server on http://localhost:8000/graphql');
        });
    }

    return {
        start: start()
    }
};

export {Server};