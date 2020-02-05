
/**
 * link.js
 * 
 * Routes internal links to gatsby-link and external links to a standard <a> element.
 */

import React from 'react'
import { Link as InternalLink } from 'gatsby'

export const Link = React.forwardRef((props, forwardRef) => {

    let { children, to, ...rest } = props

    return (props.to && props.to.match(/^\//))
        ? <InternalLink ref={forwardRef} to={props.to} {...rest}>{props.children}</InternalLink>
        : <a href={props.to} ref={forwardRef} {...rest}>{props.children}</a>

})