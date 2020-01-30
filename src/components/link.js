
import React from 'react'
import InternalLink from 'gatsby-link'

export const Link = React.forwardRef((props, forwardRef) => {

    let { children, to, ...rest } = props

    return (props.to && props.to.match(/^\//))
        ? <InternalLink ref={forwardRef} to={props.to} {...rest}>{props.children}</InternalLink>
        : <a href={props.to} ref={forwardRef} {...rest}>{props.children}</a>

})