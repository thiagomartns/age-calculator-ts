import styled from "styled-components";
import Theme from '../../styles/theme';

export const InputStyles = styled.div`
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
`