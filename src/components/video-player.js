
/**
 * video-player.js
 */

import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Wrapper = styled.div`

    max-width: 100%;
    max-height: 100%;

`

export class VideoPlayer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return <Wrapper>

            <ReactPlayer onClick={this.onClick} {...this.props} playing={this.state.play} controls={true} width='100%' height='100%' />

        </Wrapper>

    }

    onClick = () => {
        this.setState({ play: !this.state.play })
    }

}