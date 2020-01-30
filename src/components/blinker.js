
import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const PosedBlinker = posed.span({
    hidden: {
        opacity: 0,
        transition: { duration: 0 }
    },
    visible: {
        opacity: 1,
        transition: { duration: 0 }
    },
})

const StyledBlinker = styled(PosedBlinker)`

    position: absolute;

    &:before {
        content: "|"
    }

`

export class Blinker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ visible: !this.state.visible })
        }, 800)
    }

    render() {

        const { visible } = this.state

        return <StyledBlinker pose={visible ? 'visible' : 'hidden'} />

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

}