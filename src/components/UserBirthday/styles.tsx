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

        .label-error {
          color: ${Theme.colors.lightRed};
        }

        .input-error {
          border-color: ${Theme.colors.lightRed};
        }

        .span-error {
          color: ${Theme.colors.lightRed};
          font: ${Theme.typography.poppinsR1};
          font-style: italic;
        }
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
  }
`