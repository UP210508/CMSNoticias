import { useDispatch, useSelector } from "react-redux"
import { startLoginRegisterUser, startRenewingSession } from "../store/auth/auth.thunks";
import { logout } from "../store/auth/auth.slice";
import { resetUI } from "../store/ui/ui.slice";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { user, status } = useSelector( store => store.auth );

  const registerUser = ( userInformation = {} ) => {
    dispatch( startLoginRegisterUser( userInformation, 'register' ) );
  }

  const loginUser = ( userCredentials = {} ) => {
    dispatch( startLoginRegisterUser( userCredentials, 'login' ) );
  }

  const renewSession = () => {
    dispatch( startRenewingSession() );
  }

  const logoutUser = () => {
    dispatch( logout() );
    dispatch( resetUI() );
    localStorage.removeItem('cms-noticias');
  }

  return {
    status,
    user,

    registerUser,
    loginUser,
    renewSession,
    logoutUser,
  }
}