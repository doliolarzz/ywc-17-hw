
import constants from '../constants';

export default function data(state = {
  loading: false,
  data: {},
}, action) {
  switch (action.type) {
    case constants.GET_PAGE_REQUEST:
      return {
        ...state,
        data: {},
        loading: true
      };
    case constants.GET_PAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case constants.GET_PAGE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}