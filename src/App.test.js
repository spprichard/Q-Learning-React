import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import store, { history } from './store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const thing = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
  </Provider>
  )
  ReactDOM.render(thing, div);
});
