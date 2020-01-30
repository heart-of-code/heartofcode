
/* ========================================================

    CONNECT

======================================================== */

// Libs

import React from 'react'
import styled from 'styled-components'
import {
    FaTwitter as TwitterIcon,
    FaLinkedinIn as LinkedInIcon,
    FaGitlab as GitlabIcon
} from 'react-icons/fa'

import { Link } from 'components/link'

const StyledLink = styled(Link)`

    color: white;

    &:hover {
        color: #FFB736;
    }

`

const Icons = styled.div`

    flex-shrink: 0;
    text-align: center;
    margin: 25px 0;

    & > * {
        margin: 0 10px;
    }

`

export const Footer = () => (

    <Icons>
        <StyledLink to={'https://linkedin.com/in/heartofcode'}><LinkedInIcon size={'2em'} /></StyledLink>
        <StyledLink to={'https://gitlab.com/heartofcode'}><GitlabIcon size={'2em'} /></StyledLink>
        <StyledLink to={'https://twitter.com/heart_of_code'}><TwitterIcon size={'2em'} /></StyledLink>
    </Icons>

)