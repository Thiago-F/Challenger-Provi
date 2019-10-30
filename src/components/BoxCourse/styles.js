import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px;
  width: ${({ widthSize }) => widthSize || 'auto'};
`;

export const Button = styled.div``;

export const Content = styled.div`
  border: 2px solid #4c7aad;
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 8px;

  .row {
    margin-bottom: 20px;
    .name {
      font-size: 20px;
      color: ${darken(0.1, '#4c7aad')};
    }
    .text {
      font-size: 18px;
      color: #212121;
    }

    &.row-button {
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*align-items: center;*/
      /*border: 1px solid black;*/

      button {
        margin-top: 5px;
        padding: 0 15px;
        background-color: #fff;
        border: 0;
        border: 2px solid #4c7aad;
        border-radius: 4px;
        background-color: #4c7aad;
        color: #fff;
        font-weight: bold;
        /*min-height: 30px;*/

        &:hover {
          background-color: #4c7aad;
          color: #fff;
        }
      }
    }
  }
`;
