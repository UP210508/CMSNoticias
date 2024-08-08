import { Router } from "express";
import { AuthServices } from "./auth.services";
import { AuthController } from './auth.controller';
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {

  public static get routes(): Router {

    const routes = Router();
    const authService = new AuthServices();
    const authController = new AuthController( authService ); 

    routes.post('/login', authController.loginUser );
    routes.post('/register', authController.registerUser );
    routes.get('/renew-token', [ AuthMiddleware.validateJWT ], authController.renewToken )

    return routes;
  }

}