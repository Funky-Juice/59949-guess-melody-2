import * as types from './action-types';

const initialState = {
  articles: [{id: 1, title: `articles title`}],
  remoteArticles: []
};

function reducer(state = initialState, action) {
  if (action.type === types.ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === types.DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}

export default reducer;
