import { NextFunction, Request, Response } from "express";
import { jwtGenerator } from "../../config/plugins/jsonwebtoken.plugin";
import { UserModel } from "../../data";
import { UserEntity } from "../../domain/entities/user.entity";

export class AuthMiddleware {

  public static async validateJWT ( req: Request, res: Response, next: NextFunction ) {

    const authorization = req.header('Authorization');

    if ( !authorization ) {
      return res.status(401).json({ error: "No hay un token para procesar esta petición"});
    }

    if ( !authorization.startsWith('Bearer') ) {
      return res.status(401).json({ error: "El Token es invalido" });
    }

    const token = authorization.split(' ').at(1) || '';

    try {
      
      const payload = await jwtGenerator.validateToken<{ id: string; }>( token );

      if ( !payload ) {
        return res.status(401).json({ error: 'Comienza Iniciando Sesión'});
      }

      const user = await UserModel.findById(payload.id);
      
      if ( !user ) {
        return res.status(401).json({ error: 'Token invalido - Usuario no existente'})
      }
      
      if ( !user.isActive ) {
        return res.status(401).json({ error: 'Token invalido - Usuario no activo'})
      }

      const userEntity = UserEntity.fromObject( user );
      req.body.user = userEntity;

      next();

    } catch (error) {
      console.log(`${error}`);
      res.status(500).json({ error: 'Internal Server Error'});
    }

  }

}