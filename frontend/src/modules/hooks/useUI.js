import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../store/ui/ui.slice';

export const useUI = () =>  {

  const dispatch = useDispatch();
  const { isLoading, alert } = useSelector( store => store.ui )

  const showAlert = ( alertContent = '', alertType = '' ) => {
    dispatch(setAlert({
      isOpen: true,
      content: alertContent,
      type: alertType,
    }))
  }

  const closeAlert = () => {
    dispatch(setAlert({
      isOpen: false,
      content: '',
      type: '',
    }))
  }

  return {
    isLoading,
    alert,

    showAlert,
    closeAlert,
  }

}
