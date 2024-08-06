import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage, setSelectedNotice } from "../store/notices/notices.slice";

export const useNotices = () => {

  const dispatch = useDispatch();
  const { notices, selectedNotice, quantityOfPages, currentPage } = useSelector( store => store.notices )

  const selectNotice = ( id ) => {
    const notice = notices.find( notice => notice.id === id );
    dispatch( setSelectedNotice( notice ) ) 
  }

  const selectPage = ( numberPage = 0 ) => {
    dispatch( setCurrentPage( numberPage ) );
  }

  return {
    notices,
    selectedNotice,
    quantityOfPages,
    currentPage,

    selectNotice,
    selectPage
  }

}