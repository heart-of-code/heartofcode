
/* ========================================================

    404

======================================================== */

// Libs

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Search } from 'components/Search'

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding-top: 50px;
`

const FourOhFour = () => <Wrapper>

    <Helmet
        title = '404 :: Heart of Code'
        meta={[
            { name: 'description', content: 'You seem to have lost your way.' },
        ]}
    />

    <div style={{ marginBottom: '10px' }}>
        <h1>You seem to have lost your way.</h1>
        <p>What are you trying to find?</p>
    </div>
    <Search />

</Wrapper>

export default FourOhFour