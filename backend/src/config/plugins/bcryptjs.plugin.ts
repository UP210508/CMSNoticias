import { genSaltSync, compareSync, hashSync } from 'bcryptjs';

export const bcryptjsGenerator = {

  hashPassword: (password: string): string => {
    const salt = genSaltSync();
    const hashedPassword = hashSync( password, salt );
    return hashedPassword;
  },
  
  comparePassword: ( password: string, hashPassword: string ) => {
    return compareSync( password, hashPassword );
  }

}