
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

//import posed from 'react-pose'
//import { FaPlayCircle as PlayIcon, FaPauseCircle as PauseIcon } from 'react-icons/fa'

const Wrapper = styled.div`

    max-width: 100%;
    max-height: 100%;

`

/*
const StyledPlayPause = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100px;
    width: 100px;

    svg {
        width: 100%;
    }

`

const IconShadow = css`

    position: absolute;
    top: 0;
    left: 0;

    fill: black;
    filter: blur(5px);
    opacity: 0.75;

`

const PlayIconShadow = styled(PlayIcon)`
    ${IconShadow}
`

const PauseIconShadow = styled(PauseIcon)`
    ${IconShadow}
`
*/

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