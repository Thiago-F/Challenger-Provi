import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border: 2px solid rgb(74, 179, 201);
  padding: 15px 20px;
  border-radius: 8px;
  width: ${({ widthSize }) => widthSize || 'auto'};

  margin: 0 15px;

  .value {
    /*border: 1px solid red;*/
    margin: 15px;
    font-size: 22px;
    color: ${darken(0.1, 'rgb(74, 179, 201)')};
    text-align: center;
  }
  .title {
    /*border: 1px solid blue;*/
    text-align: center;
  }
`;
