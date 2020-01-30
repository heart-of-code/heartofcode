
/* ========================================================

    INDEX

======================================================== */

// Libs

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import { Terminal } from 'components/Terminal'

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`

const Index = () => (

    <Wrapper>

        <Helmet title='Home :: Heart of Code' />

        <Terminal>
            {`HELLO WORLD`}
            {`I'm Matt.`}
            {`I bike, play Dungeons & Dragons, and develop software`}
            {`Got any questions?`}
        </Terminal>

    </Wrapper>

)

export default Index