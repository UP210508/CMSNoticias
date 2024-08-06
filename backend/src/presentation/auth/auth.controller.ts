import { Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { CreateUserDto } from "../../domain/dto/users/create-user.dto";

export class AuthController {

  constructor(
    private readonly authService: AuthServices
  ){}

  public loginUser = ( req: Request, res: Response ) => {
    res.json({ msg: 'Hello'})
  }
  
  public registerUser = ( req: Request, res: Response ) => {
    const [ errorMessage, createUserDto ] = CreateUserDto.create( req.body );


  }

}