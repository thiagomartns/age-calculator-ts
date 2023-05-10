import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export const UserBirthdayContainer = styled.div`
  .user-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${Media.mobile} {
      gap: 3rem;
    }

    .submit-btn {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: none;
      background-color: ${Theme.colors.purple};
      align-self: flex-end;
      position: relative;
      z-index: 1;
      margin-right: 2rem;

      ${Media.mobile} {
        align-self: center;
        margin-right: 0;
        height: 64px;
        width: 64px;

        img {
          width: 50%;
          align-items: center;
        }
      }

      &:hover {
        background-color: ${Theme.colors.offBlack};
        cursor: pointer;
      }
    }
  }
`