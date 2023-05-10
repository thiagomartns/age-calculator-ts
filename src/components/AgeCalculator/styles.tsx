import styled from "styled-components";
import Media from '../../styles/media';

export const AgeCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Media.mobile} {
    gap: .25rem;
  }
`