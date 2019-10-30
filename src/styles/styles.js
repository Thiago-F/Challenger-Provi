import styled from 'styled-components';

export const Title = styled.span`
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: ${({ weight }) => weight || '500'};
`;
export const AlertText = styled.span`
  font-size: 20px
  color: #dcdcdc;
`;
