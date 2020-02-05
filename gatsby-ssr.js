
/**
 * gatsby-ssr.js
 * 
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'

import { DOMWrapper } from 'layouts/dom-wrapper'

export const wrapRootElement = ({ element }) => {
    return <DOMWrapper>{element}</DOMWrapper>
}