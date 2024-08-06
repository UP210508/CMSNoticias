import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo-db/init";
import { AppRouter } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {

  await MongoDatabase.connect({
    mongoUri: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  })

  const server = new Server({
    port: envs.PORT,
    router: AppRouter.routes,
    publichPath: envs.PUBLIC_PATH,
  })

  await server.start();
}