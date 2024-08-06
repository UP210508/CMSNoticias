import { Request, Response } from "express";
import { AuthServices } from "./auth.services";

export class AuthController {

  constructor(
    private readonly authService: AuthServices
  ){}

  public loginUser = ( req: Request, res: Response ) => {
    res.json({ msg: 'Hello'})
  }
  
  public registerUser = ( req: Request, res: Response ) => {
    res.json({ msg: 'Hello Register'})
  }

}