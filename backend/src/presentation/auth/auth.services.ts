import { UserModel } from "../../data";
import { CreateUserDto } from "../../domain/dto/users/create-user.dto";
import { CustomError } from "../../domain/errors/custom.error";

export class AuthServices {

  public async postUser( createUserDto: CreateUserDto ) {

    const emailExistence = await UserModel.findOne({ email: createUserDto.email });

    if ( emailExistence ) {
      throw CustomError.badRequest('El usuario ya existe');
    }



  } 

}