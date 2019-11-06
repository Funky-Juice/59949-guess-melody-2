import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import {forbiddenWordsMiddleware} from "./middleware";
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    applyMiddleware(forbiddenWordsMiddleware, thunk)
);

export default store;
