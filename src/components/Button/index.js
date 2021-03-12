import React from 'react';
import { StyledButton } from './styles';

const Button = ({ id, name, onClick = () => {} }) => {
  return (
    <StyledButton data-testid={id} id={id} name={name} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default Button;
