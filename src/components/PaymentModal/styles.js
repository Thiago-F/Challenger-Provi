import styled from 'styled-components';

export const Content = styled.div`
  .course-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 600px;

    .course-single {
      padding: 15px;
      width: 33.33%;
      max-width: 200px;

      .content {
        padding: 15px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid rgb(215, 215, 215);
        font-size: 14px;

        .text {
          margin-bottom: 10px;
        }
        .value {
        }
      }
    }
  }
`;
