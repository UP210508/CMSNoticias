import express from 'express';
import cors from 'cors';
import { AppRouter } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {

  const server = new Server({
    port: 4000,
    router: AppRouter.routes,
    publichPath: 'public',
  })

  await server.start();
}