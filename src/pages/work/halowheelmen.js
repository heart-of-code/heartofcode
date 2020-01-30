
import React from 'react'
import Helmet from 'react-helmet'

import { ImageGallery } from 'components/image-gallery'
import { PostHeader, Post } from 'components/post'

import page1 from 'assets/halowheelmen/page-home.png'

const title = 'HaloWheelmen.com'
const subtitle = ['HTML', 'JavaScript', 'PHP'].join(', ')
const link = 'http://halowheelmen.com'

const roles = ['Web Developer']
const length = 'December 2016'

export const HalowheelmenHeader = (props) => {
    return <PostHeader {...{title, subtitle}} {...props} />
}

const HalowheelmenPost = () => {

    return <Post {...{title, subtitle, link, roles, length}}>

        <Helmet
            title = 'HaloWheelmen :: Heart of Code'
        />

        <p>
            Founded in 2008, the Wheelmen are a videogame group for teamwork-oriented players.
        </p>

        <p>
            By 2016 their website was in need of an update, and I was brought on to make it happen. Their website's server file structure had to be rebuilt from the ground up, as well as all of their public-facing pages. In addition to this, I was able to use their phpbb forum as a basis for a site blog.
        </p>

        <ImageGallery items={[
            {
                original:   page1,
                thumbnail:  page1
            }
        ]} />

    </Post>

}

export default HalowheelmenPost