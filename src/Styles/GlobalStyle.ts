import {createGlobalStyle} from 'styled-components';
import { Link, Slider, styled } from '@mui/material'

export const GlobalStyle = createGlobalStyle`
    // RUBIK
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    // LATO
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Rubik', sans-serif;
        font-weight: lighter;
        scroll-behavior: smooth;
        color: #c7c7c7;
        overflow-x: hidden;
        overflow-y: auto !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        div#__next{
            min-height: 100vh;
        }
    }
    .MuiMenu-paper{
        /* background-color: #fff0 !important; */
    }
    ::-webkit-scrollbar{
        padding: 5px 0px;
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.2);
    }
    ::-webkit-scrollbar-track{
        width: 15px;
        background: rgb(49, 49, 49);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.2);
    }
    ::selection {
        background: rgba(75, 75, 75, .7);
    }
    ::-moz-selection {
        background: rgba(75, 75, 75, .7);
    }
`;