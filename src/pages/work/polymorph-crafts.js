
/**
 * polymorph-crafts.js
 */

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
            <b>A demo version of the website is in-progress.</b>
        </p>

        <p>
            Polymorph Crafts was a Kickstarter-funded startup that sold compact, durable, and affordable tabletop accessories. As the sole web developer I built the company's online storefront and product photography.
        </p>

        <p>
            After investigating several JAMstack technologies and experimenting with Jekyll and Gatsby, we settled on Gatsby. Being built on React gave us access to the entire Javascript ecosystem and its first-class support of GraphQL made digesting external APIs easy.
        </p>

        <p>
            We built off of a gatsby plugin for pulling in data from Shopify and expanded it to fetch data from the Admin APIs, a necessary step to circumvent Shopify's product variant limitations, and used that data to generate the product pages. The flagship product came in 3 models: basic, standard, and premium. Each model could then be customized with different woods, leathers, and buckles. 360-degree revolution photographs of every combination were taken. The photograph files were too numerous and large to be stored on Shopify.com, so we keyed the filenames and matched them to products in Gatsby.
        </p>

        <p>
            When changes to the website were pushed up to our git repository, webhooks would fire to deploy the statically generated website to an AWS S3 bucket and purge our Cloudflare CDN cache. Once Cloudflare picks up the updated website, it intercepts the traffic to AWS, keeping the S3 bucket accesses minimal.
        </p>

    </Post>
)

export default PMCPost