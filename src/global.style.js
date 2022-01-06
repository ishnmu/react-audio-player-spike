import { createGlobalStyle } from "styled-components";
import { grey } from "@mui/material/colors";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    html,
    body,
    #root {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
    }
    body {
        display: flex;
        flex-direction: column;
        font-family: Ubuntu, sans-serif;
        transition: all 0.25s linear;
        background: ${grey[50]}
    }
`;

export default GlobalStyle;
