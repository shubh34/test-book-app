import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 4px;
  padding: 8px;
  min-width: 40px;
  color: ${({ isActive }) => (isActive ? `rgb(240, 240, 240)` : `rgb(132, 133, 133)`)};
  background: ${({ isActive }) => (isActive ? `rgb(39,39,39)` : `none`)};
`;
