import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// html {
//   @media(max-width: 1080px) {
//     font-size: 93.75%; // 15px
//   }
//   @media(max-width: 720px) {
//     font-size: 87.5%; // 14px
//   }
// }

// :focus {
//   outline: 0;
//   box-shadow: 0 0 0 2px ${(props) => props.theme["secondary-500"]};
// }

// body {
//   background-color: ${(props) => props.theme["background-body"]};
//   color: ${(props) => props.theme["text-100"]};
//   -webkit-font-smoothing: antialiased;
// }

// body, input, textarea, button {
//   font: 400 1rem Roboto, sans-serif;
// }

// button {
//   cursor: pointer;
// }

// button[disabled] {
//   opacity: 0.6;
//   cursor: not-allowed;
// }
