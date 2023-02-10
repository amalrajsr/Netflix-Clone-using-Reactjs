
import axios from 'axios'
import { BASEURL } from './components/Constants/constants';

const instance = axios.create({
    baseURL: BASEURL
   
  });
  
  export default instance