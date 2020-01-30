
import React from 'react'
import Helmet from 'react-helmet'

import { PostHeader, Post } from 'components/post'

const title = 'polymorphcrafts.com'
const subtitle = ['React', 'GatsbyJS', 'Shopify'].join(', ')

const roles = ['Web Developer & Product Photographer']
const length = 'January 2019 - June 2019'

export const PMCHeader = (props) => {
    return <PostHeader {...{title, subtitle}} {...props} />
}

const PMCPost = () => (
    <Post {...{title, subtitle, roles, length}}>

        <Helmet
            title = 'Polymorph Crafts :: Heart of Code'
        />

        <p>
            Polymorph Crafts was a Kickstarter-funded startup that sold compact, durable, and affordable tabletop accessories.
        </p>

    </Post>
)

export default PMCPost