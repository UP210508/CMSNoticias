export class LoginUserDto {

  private constructor(
    public readonly email: string,
    public readonly password: string,
  ){}

  public static create( obj: {[key: string]: any }): [ string?, LoginUserDto? ] {

    const { email, password } = obj;

    if ( !email ) return ['El email es obligatorio', undefined ];
    if ( !password ) return ['La contraseña es obligatoria', undefined];

    return [ undefined, new LoginUserDto( email, password ) ]

  }

}