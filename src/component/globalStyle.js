import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
     
      box-sizing: border-box;
      min-height: 100vh;
  }
  
  

`;

export default GlobalStyle;
