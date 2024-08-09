import { useDispatch } from 'react-redux'
import axios from "axios"
import { setIsLoading } from '../store/ui/ui.slice';

export const useFetch = function() {

  const dispatch = useDispatch();

  const getData = async ( url ) => {
    
    let content = {}
    dispatch( setIsLoading( true ) )
    
    try {
      const { data } = await axios.get(url);
      
      content = {
        data: data,
        error: null,
      }
      
    } catch (error) {
      content = {
        data: null,
        error: 'No se pudieron obtener las noticias externas',
      }  
    }

    dispatch( setIsLoading( false ) )
    return { ...content };
  }

  return {
    getData,
  }

}