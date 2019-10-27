import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  width: ${({ widthSize }) => widthSize || 'auto'};
`;

export const Content = styled.div`
  border: 1px solid black;
`;
