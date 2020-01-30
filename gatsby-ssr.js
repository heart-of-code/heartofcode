
import React from 'react'

import { DOMWrapper } from 'layouts/dom-wrapper'

export const wrapRootElement = ({ element }) => {
    return <DOMWrapper>{element}</DOMWrapper>
}