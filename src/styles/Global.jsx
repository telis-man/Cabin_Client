import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        height:100%;
    }
      body{
        height:100%;
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        // border: 2px solid yellow;
      }

      #root{
        height: 100%;
      }

`;

export default GlobalStyles;
