
/**
 * about.js
 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import catsJPEG from 'assets/about/cam-and-chai.jpeg'

const Image = styled.img`

    margin: 15px 0;

`

const About = () => (

    <>

        <Helmet
            title = 'About :: Heart of Code'
            meta={[
                { name: 'description', content: 'Definitely a person.' },
            ]}
        />

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

            <h2>A Little About Me</h2>
            <p>
                My name is Addison. I develop software because I enjoy working through puzzles and the ah-ha moments when everything pulls together. I enjoy building interactive, accessible applications, and in the process pushing myself to grow.
            </p>

            <h2>My Cats!</h2>
            <p>
                I have two cats, Camellia and Chai. They're siblings, adopted from a shelter when they were 4 months old. Cam is energetic and playful, while Chai is a big ol boy that sleeps a lot.
            </p>

            <Image src={catsJPEG} />

        </div>

    </>

)

export default About