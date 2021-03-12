import React from 'react';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const customRender = (Component) => render(Component);

const setUpComponent = (Component, props = {}) => {
  const renderedComponent = customRender(<Component {...props} />);
  return { props, ...renderedComponent };
};

export { setUpComponent, waitFor };
