import styled from 'styled-components';

export const Container = styled.div`
  min-height: 250px;
  min-width: 300px;
  padding: 30px;
  border-radius: 8px;
  position: relative;

  background-color: #fff;

  .header {
    padding: 0 15px;
    button {
      width: 30px;
      height: 30px;
      padding: 5px;

      position: absolute;
      top: 30px;
      right: 30px;

      border: 0;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;
