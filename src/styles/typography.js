
/**
 * typography.js
 * 
 * These are re-usable styled-components that can be imported and dropped into amother
 * styled-component anywhere in the application. 
 */

import { css } from 'styled-components'

// fonts

export const HeaderFont = css`
    font-family:    'Leelawadee UI', sans-serif;
    font-weight:    bold;
`

export const BodyFont = css`
    font-family:    'Lato', sans-serif;
    font-weight:    normal;
`

// body and heading styles

export const Body = css`
    ${BodyFont}
`

export const H1 = css`
    ${HeaderFont}
    font-size:      1.5em;
    margin:         0 0 10px;
`

export const H2 = css`
    ${HeaderFont}
    font-size:      1.5em;
`

export const H3 = css`
    ${HeaderFont}
    font-size:      1.25em;
`

export const H4 = css`
    ${HeaderFont}
    font-size:      1em;
`

export const H5 = css`
    ${HeaderFont}
    font-size:      1em;
`

export const H6 = css`
    ${HeaderFont}
    font-size:      1em;
`