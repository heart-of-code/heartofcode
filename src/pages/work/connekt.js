
/**
 * connekt.js
 */

import React from 'react'
import Helmet from 'react-helmet'

import { Link } from 'components/link'
import { PostHeader, Post } from 'components/post'
import { VideoPlayer } from 'components/video-player'
import demoVideo from 'assets/shoptv/shoptv-demo.mp4'

const title = 'Connekt / ShopTV'
const subtitle = ['React', 'Python', 'Google Cloud SDK', 'RSG', 'Brightscript'].join(', ')

const roles = ['Junior Developer']
const length = 'May 2017 to July 2018'

export const ConnektHeader = (props) => {
    return <PostHeader {...{title, subtitle}} {...props} />
}

const ConnektPost = () => (
    <Post {...{title, subtitle, roles, length}}>

        <Helmet
            title = 'Connekt / ShopTV :: Heart of Code'
        />

        <h2>General Responsibilities</h2>
        <p>
            Our work required writing highly performant code, capable of running on television platforms such as LG, Sony, and Hisense. I worked on their <Link to='http://www.connekt.com/technology/#flx'>FLX advertisement tools</Link>, <Link to='http://www.connekt.com/in_action/'>Dynamic Ads</Link>, and led development on the Roku ShopTV experience.
        </p>

        <h2>ShopTV Roku App</h2>
        <VideoPlayer url={demoVideo} />

    </Post>
)

export default ConnektPost