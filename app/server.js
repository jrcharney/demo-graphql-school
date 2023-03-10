// TODO: https://www.apollographql.com/docs/apollo-server/api/express-middleware/

// TODO: ⚠️ Wrap this in a function that we can call from `./index.js` to start the server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import express from "express";
import http from "http";
import { resolvers, typeDefs } from "./graphql/index.js";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // graceful shutdown
});

async function initServer() {
  await server.start();

  // Specify the path where we'd like to mount our server
  app.use(
    "/",
    cors(),
    express.json(), // or bodyParser.json()
    expressMiddleware(server)
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.info(`🚀 Server ready at http://localhost:4000/`);
}

export default initServer;
