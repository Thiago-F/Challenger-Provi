import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Content = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;

  .box-container {
    display: flex;
  }
  .info-section {
    display: flex;
    margin-top: 15px;

    .chart-wrapper {
      width: 50%;
      padding: 15px;
      .chart {
        border: 1px solid black;
      }
    }
  }
`;
