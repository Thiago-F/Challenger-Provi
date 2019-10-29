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
        border: 2px solid rgb(74, 179, 201);
        border-radius: 4px;
        background-color: rgb(74, 179, 201);
        color: #fff;
        font-weight: bold;
        /*min-height: 30px;*/

        &:hover {
          background-color: rgb(74, 179, 201);
          color: #fff;
        }
      }
    }
  }
`;
