import jwt from 'jsonwebtoken';
import { envs } from './envs.plugin';

const seed = envs.JWT_SEED;

export const jwtGenerator = {

  async generateToken( payload: any, duration: string = "5h") {
    return new Promise( (resolve) => {
      jwt.sign( payload, seed, { expiresIn: duration }, ( err, token ) => {
        if ( err ) return resolve( null );
        resolve(token);
      })
    })
  },

  async validateToken<T>( token: string ): Promise<T | null>{
    return new Promise(( resolve ) => {
      jwt.verify( token, seed, ( err, decoded ) => {
        if ( err ) return resolve(null);
        resolve( decoded as T );
      })
    })
  }

}