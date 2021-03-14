import React from 'react';
import {
  StyledTable,
  StyledTableRow,
  StyledTableHeaderCell,
  StyledTableCell,
  StyledTableHeader
} from './styles';

const TableContainer = ({ children }) => <StyledTable>{children}</StyledTable>;

const TableHeader = ({ children }) => <StyledTableHeader>{children}</StyledTableHeader>;

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableRow = ({ children, isGhost }) => (
  <StyledTableRow isGhost={isGhost}>{children}</StyledTableRow>
);

const TableHeaderCell = ({ style = {}, children }) => (
  <StyledTableHeaderCell style={style}>{children}</StyledTableHeaderCell>
);

const TableCell = ({ title = '', styling = {}, children, isGhost }) => (
  <StyledTableCell title={title} styling={styling}>
    {children}
  </StyledTableCell>
);

const Table = {
  Container: TableContainer,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Cell: TableCell
};

export default Table;
