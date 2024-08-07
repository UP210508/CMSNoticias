import apiCMS from "../../../config/api/apiCMS"
import { setIsLoading } from "../ui/ui.slice"
import { login } from "./auth.slice"

export const startRegisteringUser = ( userInformation = {} ) => {
  return async ( dispatch ) => {
    dispatch( setIsLoading(true) )

    try {
      
      const { data: { user, token } } = await apiCMS.post('/auth/register', userInformation );

      dispatch( login( user ) )
      localStorage.setItem('cms-noticias', JSON.stringify( token ) );

    } catch (error) {
      console.log(error);
    }

    dispatch( setIsLoading(false) )
  }
}