import constants from '../constants';
import config from '../config'

export const actions = {
  getData,
};

function getData() {
  return dispatch => {
    dispatch(request());
    fetch(config.apiUrl, { method: 'GET' })
      .then(handleResponse)
      .then(
        data => {
          dispatch(success(data));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };
  function request() { return { type: constants.GET_PAGE_REQUEST } }
  function success(data) { return { type: constants.GET_PAGE_SUCCESS, data } }
  function failure(error) { return { type: constants.GET_PAGE_FAILURE, error } }
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}