import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px;
  width: ${({ widthSize }) => widthSize || 'auto'};
`;

export const Content = styled.div`
  border: 2px solid rgb(74, 179, 201);
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 8px;

  .row {
    margin-bottom: 20px;
    .name {
      font-size: 20px;
      color: ${darken(0.1, 'rgb(74, 179, 201)')};
    }
    .text {
      font-size: 18px;
      color: #212121;
    }
  }
`;
