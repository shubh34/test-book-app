import React from 'react';
import { StyledContainer } from './styles';

const Container = ({ id, children }) => {
  return (
    <StyledContainer data-testid={id} id={id}>
      {children}
    </StyledContainer>
  );
};

export default Container;
