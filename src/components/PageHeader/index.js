import React from 'react';
import { StyledPageHeader } from './styles';

const PageHeader = ({ id, header }) => {
  return <StyledPageHeader data-testid={id}>{header}</StyledPageHeader>;
};

export default PageHeader;
