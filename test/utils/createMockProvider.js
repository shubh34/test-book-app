import React from 'react';
import { Provider } from 'react-redux';

const createMockProvider = (store, props = {}, Component) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default createMockProvider;
