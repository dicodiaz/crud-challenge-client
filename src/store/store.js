import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(allReducers(), /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
));

export default store;
