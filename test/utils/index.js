import React from 'react';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import createMockStore from './createMockStore';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'

const customRender = (Component) => render(Component);

const setUpComponent = (Component, props = {}) => {
  const renderedComponent = customRender(<Component {...props} />);
  return { props, ...renderedComponent };
};

const customProviderRender = (Component, { store = createMockStore(), ...renderOptions } = {}) => {
  const Wrapper = ({ children }: ChildrenPropType) => {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  };
  return render(Component, { wrapper: Wrapper, ...renderOptions });
};

const setUpConnectedComponent = ({
  Component,
  props = {},
  stateKey = 'DEFAULT',
  hasThunk = false
}) => {
  const store = createMockStore(stateKey, hasThunk);
  const renderedComponent = customProviderRender(<Component {...props} />, { store });
  return { props, store, ...renderedComponent };
};

export { setUpComponent, waitFor, setUpConnectedComponent };
