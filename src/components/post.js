
/**
 * post.js
 */

import React from 'react'
import styled from 'styled-components'
import stickyfill from 'stickyfilljs'
import { FaExternalLinkAlt as ExternalLinkIcon } from 'react-icons/fa'

import { CloseIcon } from 'components/icons/close'
import { Link } from 'components/link'

const PostHeaderWrapper = styled.div``

const PostTitle = styled.h2`
    margin:         0;
    text-transform: uppercase;
`

const PostSubtitle = styled.span`
    display: block;
    font-family:    'Leelawadee UI';
    font-weight:    lighter;
    text-transform: uppercase;
    opacity:        0.7;
`

const HeaderLink = styled(Link)`

    display: inline-block;
    text-decoration: none;
    color: inherit;

    &:hover, &:focus {

        color: #1a1325;

        :before {
            background: #ffb73b;
            content: "";
            position: absolute;
            top: -10px;
            left: -10px;
            width: calc(100% + 20px);
            height: calc(100% + 20px);
        }

    }

`

const PostLink = styled(Link)``

export const PostHeader = React.forwardRef(({ className, to, title, subtitle, link, children }, forwardRef) => {

    return <PostHeaderWrapper className={className} ref={forwardRef}>

        {to && <HeaderLink to={to}>
            {title && <PostTitle>{title}</PostTitle>}
            {subtitle && <PostSubtitle>{subtitle}</PostSubtitle>}
        </HeaderLink>}

        {!to && title && <PostTitle>{title}</PostTitle>}
        {!to && subtitle && <PostSubtitle>{subtitle}</PostSubtitle>}

        {link && <PostLink to={link} />}

        {children}

    </PostHeaderWrapper>

})

const Sticky = styled.div`

    display: flex;

    @media (min-width: 700px) {

        position: sticky;
        top: 125px;

    }
`

const PostWrapper = styled.div`

    max-width: 950px;
    margin: 0 auto;

    @media (min-width: 700px) {

        display: flex;
        align-items: self-start;

    }

`

const StyledPostHeader = styled(PostHeader)`

    @media (max-width: 700px) {

        margin-bottom: 25px;

    }

    @media (min-width: 700px) {

        flex: 1 1 300px;

    }

`

const PostBody = styled.div`

    line-height: 1.5em;

    > * {
        margin-bottom: 10px;
    }

    > *:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 700px) {

        display: inline-block;
        padding-left: 20px;

        min-width: 350px;
        flex: 1 1 600px;

    }

`

const StyledButton = styled.button`

    margin: 10px 0;
    padding: 10px;
    font-size: 0.75em;
    border: none;
    background: white;
    cursor: pointer;

    & svg {
        margin-left: 5px;
    }

    &:hover {
        background: #ffb73b;
    }
`

export class Post extends React.Component {

    constructor(props) {
        super(props)
        this.stickyRef = React.createRef()
    }

    componentDidMount() {
        if (stickyfill.addOne) {
            stickyfill.addOne(this.stickyRef)
        }
    }

    componentWillUnmount() {
        if (stickyfill.removeOne) {
            stickyfill.removeOne(this.stickyRef)
        }
    }

    render() {

        let { title, subtitle, linkCTA, link, roles, length, children } = this.props

        return <PostWrapper>

            <Sticky ref={this.stickyRef}>

                <CloseIcon to={'/work'} />
                <StyledPostHeader {...{title, subtitle, link}}>

                    {link && <Link to={link}>
                        <StyledButton>
                            <p>
                                {linkCTA || 'View Website'}
                                <ExternalLinkIcon />
                            </p>
                        </StyledButton>
                    </Link>}

                    {roles && roles.length > 1 && <p><br /><b>Roles:</b> {roles.join(', ')}</p>}
                    {roles && roles.length === 1 && <p><br /><b>Role:</b> {roles[0]}</p>}
                    {length && <p><br /><b>Length:</b> {length}</p>}

                </StyledPostHeader>

            </Sticky>

            <PostBody>{children}</PostBody>

        </PostWrapper>

    }

}