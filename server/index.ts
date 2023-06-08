import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import './db/db'; //import data base config

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

dotenv.config();
const app = express();

//apollo server
const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then((res)=>{console.log("conexion exitosa a apollo: ",res)}).catch((err) => {
  console.error('Error al iniciar el servidor Apollo:', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en el puerto ${PORT}`);
});
