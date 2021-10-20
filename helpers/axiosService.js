import axios from 'axios';
import {URLService} from '../constants/index'; 

const axiosService = axios.create({
  baseURL: URLService,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosService;