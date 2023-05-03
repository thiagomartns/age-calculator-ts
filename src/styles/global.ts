import { createGlobalStyle } from "styled-components";
import Theme from './theme';

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
    width: 100vw;
    height: 100vh;
    background-color: ${Theme.colors.lightGrey};

    .app-content {
      width: 700px;
      height: 500px;
      background-color: #fff;
      border-radius: 24px 24px 200px 24px;
      padding: 2rem;
    }
  }

  label {
    text-transform: uppercase;
    font: ${Theme.typography.poppinsB1};
    color: ${Theme.colors.smokeyGrey};
    letter-spacing: .25rem;
  }

  input {
    width: 160px;
    height: 72px;
    border-radius: 8px;
    border: none;
    border: 1px solid ${Theme.colors.lightGrey};
    padding-left: 1.25rem;
    font: ${Theme.typography.poppinsB2};
    
    &::placeholder {
      text-transform: uppercase;
      font: ${Theme.typography.poppinsB2};
    }

    &:focus {
      outline: none;
      border-color: ${Theme.colors.purple};
      font: ${Theme.typography.poppinsB2};
    }

    &:focus::placeholder {
      color: white;
    }
  }
`