import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
