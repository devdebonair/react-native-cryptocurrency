import axios from 'axios';
import { API_BASE_URL } from '../utils/constants'

export const FETCH_COIN_DATA = "FETCH_COIN_DATA";
export const fetchCoinData = () => {
  return {
    type: FETCH_COIN_DATA,
    promise: axios.get(`${API_BASE_URL}/v1/ticker/?limit=10`)
  }
}