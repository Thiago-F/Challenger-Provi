import styled from 'styled-components';

export const Title = styled.span`
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: ${({ weight }) => weight || '500'};
`;
