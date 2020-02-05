
/**
 * index.js
 */

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
            {/* These are the default messages.
            After these have rendered, the user will be asked for input. */}
            {`HELLO WORLD`}
            {`I'm Matt.`}
            {`I bike, play Dungeons & Dragons, and develop software`}
            {`Got any questions?`}
        </Terminal>

    </Wrapper>

)

export default Index