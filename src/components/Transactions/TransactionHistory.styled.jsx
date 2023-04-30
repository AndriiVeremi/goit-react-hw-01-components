import styled from '@emotion/styled';

export const Table = styled.table`
  color: black;
  width: 600px;
  margin-bottom: 50px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TableInfo = styled.tr`
  height: 50px;
`;

export const TableBody = styled.tbody`
    
`;

export const TableName = styled.th`
  color: #fff;
`;

export const TableItem = styled.tr`
  background-color: #fff;
  height: 50px;
  text-align: center;

  &:nth-of-type(2n) {
    background-color: #ecf1f3;
  }
`;

export const TableValue = styled.td`
  color: dimgrey;
`;


