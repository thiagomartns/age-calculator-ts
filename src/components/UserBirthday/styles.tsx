import styled from "styled-components";
import Theme from '../../styles/theme';

export const UserBirthdayContainer = styled.div`
  .user-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .form-content {
      display: flex;
      gap: 2rem;

      .input-container {
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
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

      &:hover {
        background-color: ${Theme.colors.offBlack};
        cursor: pointer;
      }
    }

    .line {
      width: 50%;
      height: 1.5px;
      background-color: ${Theme.colors.lightGrey};
      position: absolute;
      top: 59%;
      z-index: 0;
    }
  }
`