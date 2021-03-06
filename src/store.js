import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers/rootReducer';

export default function configureStore(initialState={
  isAuthenticated: false
}) {
  return createStore(
    rootReducer,
      applyMiddleware(thunk)
    );
}
