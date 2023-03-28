import Joi from "joi";
import { movieRoutes } from "./routes/movie-router";
import * as Hapi from "@hapi/hapi";
import { Plugin, Server } from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";

export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["http://localhost:3000"], // an array of origins or 'ignore'
      },
    },
  });

  server.realm.modifiers.route.prefix = "/api";
  server.validator(Joi);

  const swaggerOptions = {
    info: {
      title: "Test API Documentation",
      version: "1.0.0",
    },
  };

  const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
      // @ts-ignore
      plugin: Inert,
    },
    {
      // @ts-ignore
      plugin: Vision,
    },
    {
      // @ts-ignore
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ];

  await server.register(plugins);

  server.route(movieRoutes);

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
