import * as types from './action-types';

export function addArticle(payload) {
  return {type: types.ADD_ARTICLE, payload};
}

export function getData() {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({type: types.DATA_LOADED, payload: json});
      });
  };
}
