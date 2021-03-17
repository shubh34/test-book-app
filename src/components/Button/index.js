import React from 'react';
import { StyledButton } from './styles';

const Button = ({ id, name, onClick = () => {}, isActive = false, disabled = false }) => {
  return (
    <StyledButton
      data-testid={id}
      id={id}
      name={name}
      onClick={onClick}
      isActive={isActive}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
