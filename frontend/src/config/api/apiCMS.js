import axios from 'axios';
import { getEnvVariables } from '../../modules/helpers';

const { VITE_API_URL } = getEnvVariables();

const apiCMS = axios.create({
  baseURL: VITE_API_URL
})

apiCMS.interceptors.request.use( ( config ) => {

  let tokenString = "";

  const token = JSON.parse( localStorage.getItem('cms-noticias') );

  if ( token ) {
    tokenString = token;
  }

  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + tokenString 
  }

  return config;
})

export default apiCMS;