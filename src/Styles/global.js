import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --Main-Orange-Primary: #F27D3C;
        --Main-Orange-Secondary: #E18450;
        --Main-Black-Primary: #544848;
        --Main-White: #ffffff;
        --Main-Grey-Primary: #6B6868;
        --Main-Grey-Secondary: #7E7D7D;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        background: var(--Main-Orange-Primary);
        color: var(--Main-White);
        width: 10rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 15px;
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

`