import { Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { CreateUserDto } from "../../domain/dto/users/create-user.dto";
import { CustomError } from "../../domain/errors/custom.error";

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
    res.json({ msg: 'Hello'})
  }
  
  public registerUser = ( req: Request, res: Response ) => {
    const [ errorMessage, createUserDto ] = CreateUserDto.create( req.body );

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage });
    }

    // this.authService.postUser( createUserDto! )

  }

}