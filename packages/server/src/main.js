import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = new express();
  server.applyMiddleware({ app, bodyParserConfig: true, });
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
  const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`;
  await new Promise(resolve => app.listen({ port: PORT, hostname:  HOSTNAME}, resolve));
  console.log(`🚀 Server ready at ${HOSTNAME}:${PORT}`);
  return { server, app };
}


startApolloServer(typeDefs, resolvers)