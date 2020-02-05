
/**
 * spectrumtv.js
 */

import React from 'react'
import Helmet from 'react-helmet'

import { ImageGallery } from 'components/image-gallery'
import { PostHeader, Post } from 'components/post'

// image set 1
import buyflow1 from 'assets/spectrumtv/screen-buyflow.jpg'
import buyflow2 from 'assets/spectrumtv/screen-buyflow-networks.jpg'
import buyflow3 from 'assets/spectrumtv/screen-buyflow-premiums.jpg'
import buyflow4 from 'assets/spectrumtv/screen-buyflow-premiums2.jpg'
import buyflow5 from 'assets/spectrumtv/screen-buyflow-extras.jpg'
import buyflow6 from 'assets/spectrumtv/screen-buyflow-review.jpg'
import buyflow7 from 'assets/spectrumtv/screen-buyflow-welcome.jpg'

// image set 2
import guide1 from 'assets/spectrumtv/screen-miniguide.jpg'
import guide2 from 'assets/spectrumtv/screen-guide.jpg'
import guide3 from 'assets/spectrumtv/screen-guide-filters.jpg'

// image set 3
import app1 from 'assets/spectrumtv/screen-menu.jpg'
import app2 from 'assets/spectrumtv/screen-library.jpg'
import app3 from 'assets/spectrumtv/screen-product.jpg'
import app4 from 'assets/spectrumtv/screen-more-episodes.jpg'

const title = 'Spectrum TV Roku App'
const subtitle = ['RSG', 'Brightscript', 'Node', 'Charles Proxy'].join(', ')

const linkCTA = 'View App'
const link = 'https://channelstore.roku.com/details/23048/spectrum-tv'

const roles = ['Contractor (3 months)', 'Senior Developer']
const length = 'July 2018 - Jan 2019'

export const SpectrumTVHeader = (props) => {
    return <PostHeader {...{title, subtitle}} {...props} />
}

const SpectrumTVPost = () => {

    return <Post {...{title, subtitle, linkCTA, link, roles, length}}>

        <Helmet
            title = 'SpectrumTV :: Heart of Code'
        />

        <p>
            I have been responsible for integrating new features, large-scale refactoring, and coordinating with external teams on new company initiatives. Our app has over a million active users, so we have to ensure that any new features and fixes going out the door are hardened and reliable.
        </p>
        <p>
            The most critical initiative I led was upgrading our new-user acquisition frontend. Marketing has multiple offers they can extend to potential users, and we needed to reflect those possibilities in the front-end when a user attempts to sign up. To meet this requirement we integrated a component-based CMS into the front-end, enabling marketing to update copy, organization, and the available offers without code changes.
        </p>

        <h2>New-Subscriber Acquisition</h2>
        <ImageGallery items={[
            {
                original:   buyflow1,
                thumbnail:  buyflow1,
            },
            {
                original:   buyflow2,
                thumbnail:  buyflow2,
            },
            {
                original:   buyflow3,
                thumbnail:  buyflow3,
            },
            {
                original:   buyflow4,
                thumbnail:  buyflow4,
            },
            {
                original:   buyflow5,
                thumbnail:  buyflow5,
            },
            {
                original:   buyflow6,
                thumbnail:  buyflow6,
            },
            {
                original:   buyflow7,
                thumbnail:  buyflow7,
            },
        ]} />

        <h2>Subscriber Experience</h2>

        <h3>Mini-Guide & Guide</h3>
        <ImageGallery items={[
            {
                original:   guide1,
                thumbnail:  guide1,
            },
            {
                original:   guide2,
                thumbnail:  guide2,
            },
            {
                original:   guide3,
                thumbnail:  guide3,
            },
        ]} />

        <h3>Menu, Catelog, and Products Pages</h3>
        <ImageGallery items={[
            {
                original:   app1,
                thumbnail:  app1,
            },
            {
                original:   app2,
                thumbnail:  app2,
            },
            {
                original:   app3,
                thumbnail:  app3,
            },
            {
                original:   app4,
                thumbnail:  app4,
            },
        ]} />

    </Post>

}

export default SpectrumTVPost