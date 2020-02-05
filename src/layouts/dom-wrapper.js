
/**
 * dom-wrapper.js
 * 
 * This component wraps the website and persists through page changes.
 */



import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'



import { Header } from 'modules/header'
import { Footer } from 'modules/footer'
import { Global } from 'styles/global'

import { setConfig } from 'react-hot-loader'

import logo16 from 'assets/logo-16.png'
import logo32 from 'assets/logo-32.png'

setConfig({ logLevel: 'no-errors-please' })

const PageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    min-height: 100vh;

`

const Main = styled.main`

    flex: 1 0 auto;
    width: 100%;
    min-height: 50vh;
    margin: 25px auto;
    padding: 0 25px;

    @media (min-width: 700px) {
        padding: 0 100px;
    }

`

export const DOMWrapper = ({  children }) => {

    return(
        <PageWrapper>

            <Global />

            <Helmet
                title='Heart of Code'
                meta={[
                    { name: 'description', content: 'Creative mind with a heart of code.' },
                    { name: 'keywords', content: 'software, programming, developer' },
                ]}
                link={[
                    { rel: 'icon', type: 'image/png', sizes: '16x16', href: logo16 },
                    { rel: 'icon', type: 'image/png', sizes: '32x32', href: logo32 }
                ]}
            />

            <Header />
            <Main>{children}</Main>
            <Footer />

        </PageWrapper>
    );

}