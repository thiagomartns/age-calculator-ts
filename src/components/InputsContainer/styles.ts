import styled from "styled-components";
import Media from '../../styles/media';

export const InputFieldContainer = styled.div`
  display: flex;
  gap: 2rem;

  ${Media.mobile} {
    gap: 1rem;
    justify-content: center;
  }
`