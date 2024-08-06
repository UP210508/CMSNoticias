import { useDispatch, useSelector } from 'react-redux'

export const useUI = () =>  {

  const dispatch = useDispatch();
  const { isLoading, modal } = useSelector( store => store.ui )

  return {
    isLoading,
    modal,
  }

}
