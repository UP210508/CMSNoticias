import { bcryptjsGenerator } from "../../config/plugins/bcryptjs.plugin";
import { jwtGenerator } from "../../config/plugins/jsonwebtoken.plugin";
import { UserModel } from "../../data";
import { CreateUserDto } from "../../domain/dto/users/create-user.dto";
import { LoginUserDto } from "../../domain/dto/users/login-user.dto";
import { CustomError } from "../../domain/errors/custom.error";

export class AuthServices {

  public async postUser( createUserDto: CreateUserDto ) {

    const emailExistence = await UserModel.findOne({ email: createUserDto.email });

    if ( emailExistence ) {
      throw CustomError.badRequest('El usuario ya existe');
    }

    const newUser = new UserModel( createUserDto );

    newUser.password = bcryptjsGenerator.hashPassword( newUser.password );
    newUser.createdAt = new Date();
    await newUser.save();

    const token = await jwtGenerator.generateToken({ id: newUser.id });

    return {
      user: newUser,
      token: token,
    }

  } 

  public async postLoginUser( loginUserDto: LoginUserDto ) {

    const user = await UserModel.findOne({ email: loginUserDto.email });

    if ( !user ) {
      throw CustomError.notFound("No existe el usuario ingresado");
    }

    const isPasswordCorrect = bcryptjsGenerator.comparePassword( loginUserDto.password, user.password );

    if ( !isPasswordCorrect ) {
      throw CustomError.unauthorized('Contraseña incorrecta');
    }

    const token = await jwtGenerator.generateToken({ id: user.id });

    return {
      user,
      token
    }

  }

}