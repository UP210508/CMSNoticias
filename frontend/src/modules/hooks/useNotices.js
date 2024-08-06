import { useDispatch, useSelector } from "react-redux"
import { setSelectedNotice } from "../store/notices/notices.slice";

export const useNotices = () => {

  const dispatch = useDispatch();
  const { notices, selectedNotice } = useSelector( store => store.notices )

  const selectNotice = ( id ) => {
    const notice = notices.find( notice => notice.id === id );
    dispatch( setSelectedNotice( notice ) ) 
  }

  return {
    notices,
    selectedNotice,

    selectNotice
  }

}