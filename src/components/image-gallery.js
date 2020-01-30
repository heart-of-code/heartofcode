
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Gallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

const GlobalStyle = createGlobalStyle`

    .image-gallery {

        font-size: 50%;

        button {
            background: rgba(255,255,255,0.25) !important;
        }

        .image-gallery-left-nav, .image-gallery-right-nav {
            padding: 15px;
        }

        .image-gallery-fullscreen-button:hover:before,
        .image-gallery-left-nav:hover:before,
        .image-gallery-play-button:hover:before,
        .image-gallery-right-nav:hover:before {
            font-weight: bold;
            color: #ffb73b;
        }

        span {
            position: initial;
        }

    }

`

export const ImageGallery = (props) => <>
    <GlobalStyle />
    <Gallery {...props} />
</>