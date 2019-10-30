import styled from 'styled-components';

export const Container = styled.div`
  background: #4c7aad;

  width: 100%;
  max-width: 250px;
  height: 100vh;
  position: relative;
  /*left: -180px;*/

  color: #fff;

  /*.toggle {
    border: 1px solid black;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }*/

  header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0;

    .user {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      .user-avatar {
        width: 80px;
        height: 80px;
        background-color: #fafafa;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .user-name {
        font-size: 20px;
      }
    }
  }
  .content {
    .item {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px 0;
      cursor: pointer;

      .icon {
        margin: 0 15px;
      }

      .text {
        font-size: 18px;
        font-weight: 500;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .logout {
    width: 100%;
    padding: 15px;
    position: absolute;
    bottom: 0;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
