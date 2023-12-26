import { createGlobalStyle } from "styled-components";


const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: roboto,sans-serif;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;