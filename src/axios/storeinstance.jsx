import {STORE_BASE_URL} from '../constants/constants'
export const storeinstance = axios.create({
    baseURL: STORE_BASE_URL,
  });