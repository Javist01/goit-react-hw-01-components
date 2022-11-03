import styled from '@emotion/styled/macro';

export const Table = styled.table`
  margin: 0 auto;
  width: 400px;

  box-shadow: ${props => props.theme.utils.shadow};
  border-collapse: collapse;

  background-color: ${props => props.theme.colors.white};
`;

export const Head = styled.thead`
  background-color: ${props => props.theme.colors.bgRow};
`;

export const Row = styled.tr`
  text-align: center;
`;

export const HeadCell = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;

  width: calc(100% / 3);
  text-align: center;

  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.borderTableHead};

  &:nth-of-type(3) {
    border-right: none;
  }
`;

export const Body = styled.tbody`
  & ${Row}:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.white};
  }

  & ${Row}:nth-of-type(even) {
    background-color: ${props => props.theme.colors.bgItem};
  }
`;

export const BodyCell = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;

  width: calc(100% / 3);
  text-align: center;

  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
  border-right: 1px solid ${props => props.theme.colors.borderTableBody};

  &:nth-of-type(3) {
    border-right: none;
  }
`;