import { regularExps } from "../../../config/utils/regular-exp";

export class CreateUserDto {

  private constructor(
    public readonly firstName: string,
    public readonly email: string,
    public readonly password: string,
  ){}

  public static create( obj: {[key: string]: any }): [ string?, CreateUserDto? ] {

    const { firstName, email, password } = obj;

    if ( !firstName ) return ['El nombre es obligatorio', undefined ];
    if ( !regularExps.email.test( email ) ) return ['El email no es válido', undefined ];
    if ( !password ) return ['La contraseña es obligatoria', undefined];

    return [ undefined, new CreateUserDto( firstName, email, password ) ]

  }

}