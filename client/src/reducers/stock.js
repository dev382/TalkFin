import {
  GET_STOCK,
  STOCK_ERROR,
  GET_STOCK_FUNDAMENTALS,
  FUNDAMENTALS_ERROR,
  GET_STOCK_SEARCH_DATA,
  SEARCH_DATA_ERROR
} from '../actions/types';

const initialState = {
  stockData: {},
  stockFundamentals: {},
  stockSearchData: {},
  loading: true,
  error: {},
  fundamentalsError: {},
  searchDataError: {}
};

function stockReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STOCK:
      return {
        ...state,
        stockData: payload,
        loading: false
      };
    case GET_STOCK_FUNDAMENTALS:
      return {
        ...state,
        stockFundamentals: payload,
        loading: false
      };
    case GET_STOCK_SEARCH_DATA:
      return {
        ...state,
        stockSearchData: payload,
        loading: false
      };
    case STOCK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FUNDAMENTALS_ERROR:
      return {
        ...state,
        fundamentalsError: payload,
        loading: false,
      };
    case SEARCH_DATA_ERROR:
      return {
        ...state,
        searchDataError: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default stockReducer;
