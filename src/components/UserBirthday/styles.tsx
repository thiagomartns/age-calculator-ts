import styled from "styled-components";
import Media from '../../styles/media';

export const UserBirthdayContainer = styled.div`
  .user-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${Media.mobile} {
      gap: 3rem;
    }
  }
`