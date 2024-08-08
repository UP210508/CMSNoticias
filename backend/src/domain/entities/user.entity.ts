import { CustomError } from "../errors/custom.error";

export class UserEntity {

  constructor(
    public id: string,
    public firstName: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public isActive: boolean,
    public lastName?: string,
    public img?: String,
  ) {}

  public static fromObject( userObj: {[key: string]: any} ): UserEntity {

    const { id, _id, firstName, email, password, createdAt, isActive, lastName, img} = userObj;

    if ( !id && !_id ) throw CustomError.badRequest('El id no se encuentra - UserEntity');
    if ( !firstName ) throw CustomError.badRequest('El nombre no se encuentra - UserEntity');
    if ( !email ) throw CustomError.badRequest('El email no se encuentra - UserEntity');
    if ( !password ) throw CustomError.badRequest('La contraseña no se encuentra - UserEntity');
    if ( !createdAt ) throw CustomError.badRequest('La fecha de creación no se encuentra - UserEntity');
    if ( isActive === undefined ) throw CustomError.badRequest('El estatus no se encuentra - UserEntity');

    return new UserEntity(
      id,
      firstName,
      email,
      password,
      createdAt,
      isActive,
      lastName,
      img,
    );

  }

}