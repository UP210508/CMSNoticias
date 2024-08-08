import apiCMS from "../../../config/api/apiCMS"
import { setAlert, setIsLoading } from "../ui/ui.slice"
import { login } from "./auth.slice"

let alert = { content: '', type: ''}

export const startLoginRegisterUser = ( userInformation = {}, endpoint = "" ) => {
  return async ( dispatch ) => {
    dispatch( setIsLoading(true) )

    try {
      
      const { data: { user, token } } = await apiCMS.post(`/auth/${endpoint}`, userInformation );

      dispatch( login( user ) )
      localStorage.setItem('cms-noticias', JSON.stringify( token ) );

      alert.content = `Bienvenido ${ user.firstName }`;
      alert.type = 'success';

    } catch (error) {
      const { error: errorMessage } = error.response.data;
      alert.content = errorMessage;
      alert.type = 'error';
    }

    dispatch( setIsLoading(false) )
    dispatch( setAlert({ isOpen: true, ...alert }) )
  }
}

export const startRenewingSession = () => {
  return async( dispatch ) => {

    dispatch( setIsLoading(true) )

    try {
      
      const { data: { token, user } } = await apiCMS.get('/auth/renew-token');
      
      dispatch( login( user ) )
      localStorage.setItem('cms-noticias', JSON.stringify( token ) );
      alert.content = `Bienvenido ${ user.firstName }`;
      alert.type = 'success';
      
    } catch (error) {
      const { error: errorMessage } = error.response.data;
      alert.content = errorMessage;
      alert.type = 'error';
    }
    
    dispatch( setIsLoading(false) );
    dispatch( setAlert({ isOpen: true, ...alert }) )

  }
}