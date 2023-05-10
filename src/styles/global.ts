import { createGlobalStyle } from "styled-components";
import Theme from './theme';
import Media from './media';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 960px;
    background-color: ${Theme.colors.lightGrey};

    ${Media.mobile} {
      height: 100vh;
      align-items: flex-start;
      padding-top: 6rem;
    }

    .app-content {
      max-width: 840px;
      width: 100%;
      background-color: #fff;
      border-radius: 24px 24px 200px 24px;
      padding: 2rem 2rem 4rem 2rem;

      ${Media.mobile} {
        max-width: 350px;
        padding: 2rem 1.25rem 4rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        border-radius: 24px 24px 100px 24px;
      }
    }
  }

  label {
    text-transform: uppercase;
    font: ${Theme.typography.poppinsB1};
    color: ${Theme.colors.smokeyGrey};
    letter-spacing: .25rem;

    ${Media.mobile} {
      font: ${Theme.typography.poppinsB4};
    }
  }

  input {
    max-width: 180px;
    height: 72px;
    border-radius: 8px;
    border: none;
    border: 1px solid ${Theme.colors.lightGrey};
    padding-left: 1.25rem;
    font: ${Theme.typography.poppinsB2};

    ${Media.mobile} {
      max-width: 87.67px;
      height: 54px;
      font: ${Theme.typography.poppinsB3};
      padding-left: .75rem;
    }
    
    &::placeholder {
      text-transform: uppercase;
      font: ${Theme.typography.poppinsB2};

      ${Media.mobile} {
        font: ${Theme.typography.poppinsB3};
      }
    }

    &:focus {
      outline: none;
      border-color: ${Theme.colors.purple};
      font: ${Theme.typography.poppinsB2};

      ${Media.mobile} {
        font: ${Theme.typography.poppinsB3};
      }
    }

    &:focus::placeholder {
      color: white;
    }
  }

  h1 {
    font: ${Theme.typography.poppinsXB1};
    color: ${Theme.colors.purple};
    font-style: italic;

    ${Media.mobile} {
      font: ${Theme.typography.poppinsXB2};
      font-style: italic;
    }

    span {
      color: ${Theme.colors.offBlack};
    }
  }
`