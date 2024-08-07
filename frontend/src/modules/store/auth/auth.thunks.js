import apiCMS from "../../../config/api/apiCMS"
import { setIsLoading } from "../ui/ui.slice"
import { login } from "./auth.slice"

export const startLoginRegisterUser = ( userInformation = {}, endpoint = "" ) => {
  return async ( dispatch ) => {
    dispatch( setIsLoading(true) )

    try {
      
      const { data: { user, token } } = await apiCMS.post(`/auth/${endpoint}`, userInformation );

      dispatch( login( user ) )
      localStorage.setItem('cms-noticias', JSON.stringify( token ) );

    } catch (error) {
      console.log(error);
    }

    dispatch( setIsLoading(false) )
  }
}