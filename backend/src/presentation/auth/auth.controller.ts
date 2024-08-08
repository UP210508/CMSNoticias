import { Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { CreateUserDto } from "../../domain/dto/users/create-user.dto";
import { CustomError } from "../../domain/errors/custom.error";
import { LoginUserDto } from "../../domain/dto/users/login-user.dto";

export class AuthController {

  constructor(
    private readonly authService: AuthServices
  ){}

  private handleErrorResponse = ( error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error'});

  }

  public loginUser = ( req: Request, res: Response ) => {
    const [ errorMessage, loginUserDto ] = LoginUserDto.create( req.body );

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage });
    }

    this.authService.postLoginUser( loginUserDto! )
      .then( data => res.status(200).json( data ) )
      .catch( error => this.handleErrorResponse( error, res ) )

  }
  
  public registerUser = ( req: Request, res: Response ) => {
    const [ errorMessage, createUserDto ] = CreateUserDto.create( req.body );

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage });
    }

    this.authService.postUser( createUserDto! )
      .then( data => res.status(201).json( data ))
      .catch( error => this.handleErrorResponse( error, res ) )

  }

  public renewToken = ( req: Request, res: Response ) => {

    const { user } = req.body;

    this.authService.getNewToken( user! )
      .then( newToken => res.status(200).json({ token: newToken }))
      .catch( error => this.handleErrorResponse( error, res ) )

  }

}