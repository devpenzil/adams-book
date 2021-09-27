import {AUTH_BASE_URL} from '../constants/constants'
export const authinstance = axios.create({
    baseURL: AUTH_BASE_URL,
  });

