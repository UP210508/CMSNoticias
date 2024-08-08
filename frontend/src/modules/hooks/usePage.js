import { useLocation, useNavigate } from "react-router-dom"
import { capitalizeString } from "../helpers";

export const usePage = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getRouteName = () => {
    const [ _url, ...routes ] = pathname.split('/');
    let route = '';

    for( let i = 0; i < routes.length; i++ ) {
      route += `${capitalizeString(routes[i])}${( i !== routes.length - 1 ) ? ' -  ' : ''}`;
    }

    const page = route.split(' - ').slice(1).join(' - ');
    const lastPage = routes.at(-1);

    return {route, page, lastPage};
  }

  const goToPage = ( path = '' ) => {
    navigate(`/${path}`)
  }

  return {
    getRouteName,
    goToPage,
  }

}
