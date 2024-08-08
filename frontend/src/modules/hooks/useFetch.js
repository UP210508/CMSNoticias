import axios from "axios"

export const useFetch = function() {

  const getData = async ( url ) => {
    try {
      const { data } = await axios.get(url);
      
      return {
        data: data,
        error: null,
      }

    } catch (error) {
      
      return{
        data: null,
        error: 'No se pudieron obtener las noticias externas',
      }
      
    }
  }

  return {
    getData,
  }

}