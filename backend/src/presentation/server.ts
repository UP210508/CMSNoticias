import express, { Router } from "express";
import cors from 'cors';
import fileUpload from 'express-fileupload';

interface ServerOptions {
  port: number;
  router: Router;
  publichPath?: string;
}

export class Server {

  public readonly app = express();
  private serverListeners?: any;
  private readonly port: number;
  private readonly router: Router;
  private readonly publicPath: string;

  constructor( option: ServerOptions ) {
    const { port, router, publichPath = 'public' } = option;
    this.port = port;
    this.router = router;
    this.publicPath = publichPath;
  }

  public async start() {

    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use(fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
      useTempFiles: true,
      tempFileDir: '/tmp/',
    }))

    this.app.use( express.static( this.publicPath ) );

    this.app.use( this.router );

    this.serverListeners = this.app.listen( this.port, () => {
      console.log(`Server running in port ${this.port}`)
    });

  }

  public close() {
    this.serverListeners?.close();
  }

}