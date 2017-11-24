import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './containers/App/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const thing = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <App/>
        </div>
    </ConnectedRouter>
  </Provider>
  )
  ReactDOM.render(thing, div);
});
