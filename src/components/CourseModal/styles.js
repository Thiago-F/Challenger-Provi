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
      cursor: pointer;

      .content {
        padding: 15px;
        text-align: center;
        border-radius: 8px;
        border: 2px solid rgb(74, 179, 201);

        .icon {
          img {
            max-width: 60px;

            &:hover {
              transform: scale(1.05);
            }
          }
        }

        .title {
        }
        .infos {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
      }
    }
  }
`;
