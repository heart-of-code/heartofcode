
// external

import { createGlobalStyle } from "styled-components";

// internal

import { Normalize } from './normalize';
import { Body, H1, H2, H3, H4, H5, H6 } from './typography'

export const Global = createGlobalStyle`

    ${Normalize}

    @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lora:400,700');

    body {

        ${Body}
        background: #1a1325;
        color: white;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: rgb(50, 50, 75);
        }

        ::-webkit-scrollbar-thumb {
            background: #FFB736;
            border-radius: 5px;
        }

    }

    a {
        color: #ffb73b;

        &:visited {
            color: #ffab90;
        }
    }

    h1 { 
        ${H1} 
    }

    h2 {
        ${H2}
    }

    h3 {
        ${H3}
    }

    h4 {
        ${H4}
    }

    h5 {
        ${H5}
    }

    h6 {
        ${H6}
    }

    p, article {
        margin: 0;
    }

    img, svg {
        max-height: 100%;
        max-width:  100%;
        height:     auto;
        width:      auto;
    }

    svg { 
        display: inline-block;
        vertical-align: middle;
    }
    
    body {
        font-family: 'Lato', 'sans-serif';
    }

    *, *:after, *:before {
        box-sizing: border-box;
        position: relative;
    }

`;