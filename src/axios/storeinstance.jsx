import {STORE_BASE_URL} from '../constants/constants'
import axios from 'axios';
// * Axios instance for Database
const storeinstance = axios.create({
    baseURL: STORE_BASE_URL,
  });

export default storeinstance;