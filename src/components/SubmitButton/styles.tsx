import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export const SubmitBtnStyles = styled.button`
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
      z-index: 999;
    }
  }

  &:hover {
    background-color: ${Theme.colors.offBlack};
    cursor: pointer;
  }
`