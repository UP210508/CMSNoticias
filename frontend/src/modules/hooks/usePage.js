import { useLocation } from "react-router-dom"
import { capitalizeString } from "../helpers";

export const usePage = () => {

  const { pathname } = useLocation();

  const getPageName = () => {
    const page = pathname.split('/').at(-1);
    const pageNameCap = capitalizeString( page );
    return pageNameCap;
  }

  return {
    getPageName
  }

}
