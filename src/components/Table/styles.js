import styled from 'styled-components';

export const StyledTable = styled.table`
  padding: 0 24px;
  background: rgb(39, 39, 39);
  border-radius: 6px;
  width: 100%;
  border-collapse: collapse;
  @media only screen and (max-width: 800px) {
    border-radius: 0;
  }
`;

export const StyledTableHeader = styled.thead`
  @media only screen and (max-width: 800px) {
    tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  }
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid rgb(56, 56, 56);
  ${({ isGhost }) =>
    isGhost
      ? `
        animation-name: example;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        @keyframes example {
          from {background-color: rgb(51, 51, 51, 0)}
          to {background-color: rgba(51, 51, 51, 0.9)}
        }
      `
      : ``};
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-flow: column;
  }
`;

export const StyledTableHeaderCell = styled.th`
  color: rgb(132, 133, 133);
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding: 16px 12px;
`;

export const StyledTableCell = styled.td`
  ${({ styling }) => styling};
  color: rgb(240, 240, 240);
  font-size: 20px;
  font-weight: normal;
  padding: 16px 12px;
  text-align: left;
  @media only screen and (max-width: 800px) {
    border: none;
    position: relative;
    padding-left: 40%;
    white-space: normal;
    width: auto;
    ${({ title }) => {
      return `
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 25%;
          padding: 16px 12px;
          color: rgb(132, 133, 133);
          font-size: 20px;
          text-align: left;
          content: '${title}';
      }`;
    }};
  }
`;
