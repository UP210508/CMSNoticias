import { useDispatch, useSelector } from "react-redux"
import { startRegisteringUser } from "../store/auth/auth.thunks";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { user, status } = useSelector( store => store.auth );

  const registerUser = ( userInformation = {} ) => {
    dispatch( startRegisteringUser( userInformation ) );
  }

  return {
    status,
    user,

    registerUser,
  }
}