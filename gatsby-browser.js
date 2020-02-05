
/**
 * gatsby-browser.js
 * 
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import { DOMWrapper } from 'layouts/dom-wrapper'

export const wrapRootElement = ({ element }) => {
    return <DOMWrapper>{element}</DOMWrapper>
}