import api from '../utils/api';
import {
  GET_STOCK,
  STOCK_ERROR,
  GET_STOCK_FUNDAMENTALS,
  FUNDAMENTALS_ERROR,
  GET_STOCK_SEARCH_DATA,
  SEARCH_DATA_ERROR
} from './types';


export const getStock = (stocksymbol) => async (dispatch) => {
  try {
    const res = await api.get(`/stock/${stocksymbol}`);

    dispatch({
      type: GET_STOCK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getStockFundamentals = (stocksymbol) => async (dispatch) => {
  try {
    const res = await api.get(`/fundamentals/${stocksymbol}`);

    dispatch({
      type: GET_STOCK_FUNDAMENTALS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FUNDAMENTALS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getStockSearchData = (searchTerm) => async (dispatch) => {
  try {
    const res = await api.get(`/stockSearch/${searchTerm}`);

    dispatch({
      type: GET_STOCK_SEARCH_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

