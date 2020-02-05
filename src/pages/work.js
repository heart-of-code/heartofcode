
/**
 * work.js
 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HalowheelmenHeader } from './work/halowheelmen'
import { ConnektHeader } from './work/connekt'
import { PMCHeader } from './work/polymorph-crafts'
import { RomanticHeader } from './work/romantic-era-lyrics'
import { SpectrumTVHeader } from './work/spectrumtv'

const WorkList = styled.ul`

    max-width: 800px;
    margin: 0 auto;
    list-style: none;
    padding: 0;

`

const WorkItem = styled.li`

    margin: 35px 0;

`

const Portfolio = () => (

    <>

        <Helmet title='Work :: Heart of Code' />

        <WorkList>
            <WorkItem><SpectrumTVHeader to={'/work/spectrumtv'} /></WorkItem>
            <WorkItem><ConnektHeader to={'/work/connekt'} /></WorkItem>
            <WorkItem><PMCHeader to={'/work/polymorph-crafts'} /></WorkItem>
            <WorkItem><RomanticHeader to={'/work/romantic-era-lyrics'} /></WorkItem>
            <WorkItem><HalowheelmenHeader to={'/work/halowheelmen'} /></WorkItem>
        </WorkList>

    </>

)

export default Portfolio