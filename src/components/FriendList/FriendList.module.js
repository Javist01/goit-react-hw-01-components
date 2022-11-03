
import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 200px;
  margin: 0 auto;
  padding: 5px 10px;

  border-radius: 5px;
  box-shadow: ${props => props.theme.utils.shadow};

  background-color: ${props => props.theme.colors.white};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${({ eventType, theme }) =>
    eventType ? theme.colors.isOnline : theme.colors.isOffline};
`;

export const Name = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
`;

export const Avatar = styled.img``;