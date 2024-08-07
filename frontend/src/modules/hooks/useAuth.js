import { useDispatch, useSelector } from "react-redux"
import { startLoginRegisterUser } from "../store/auth/auth.thunks";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { user, status } = useSelector( store => store.auth );

  const registerUser = ( userInformation = {} ) => {
    dispatch( startLoginRegisterUser( userInformation, 'register' ) );
  }

  const loginUser = ( userCredentials = {} ) => {
    dispatch( startLoginRegisterUser( userCredentials, 'login' ) );
  }

  return {
    status,
    user,

    registerUser,
    loginUser,
  }
}