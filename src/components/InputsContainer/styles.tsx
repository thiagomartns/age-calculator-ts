import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export  const InputFieldContainer = styled.div`
  display: flex;
  gap: 2rem;

  ${Media.mobile} {
    gap: 1rem;
    justify-content: center;
  }

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
`