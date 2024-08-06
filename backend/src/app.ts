import { envs } from "./config/plugins/envs.plugin";
import { AppRouter } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {

  const server = new Server({
    port: envs.PORT,
    router: AppRouter.routes,
    publichPath: envs.PUBLIC_PATH,
  })

  await server.start();
}