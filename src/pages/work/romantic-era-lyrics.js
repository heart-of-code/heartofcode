
import React from 'react'
import Helmet from 'react-helmet'

import { PostHeader, Post } from 'components/post'

const title = 'romanticeralyrics.org'
const subtitle = ['HTML, JavaScript, PHP, MySQL'].join(', ')

const link = 'https://romanticeralyrics.org'

const roles = ['Web Developer']
const length = 'January 2016 - May 2016'

export const RomanticHeader = (props) => {
    return <PostHeader {...{title, subtitle}} {...props} />
}

const RomanticPost = () => (
    <Post {...{title, subtitle, link, roles, length}}>

        <Helmet
            title = 'Romantic Era Lyrics :: Heart of Code'
        />

        <p>
            Romantic Era Lyrics is an archive of old english poems and visualized performances.
        </p>

        <p>
            I designed and developed an interactive backend to ease user management and make data-entry intuitive and error-resistant for non-technical users. A custom CRUD interface was built to model complex data relationships.
        </p>

    </Post>
)

export default RomanticPost