
/**
 * terminal.js
 * 
 * Simulates a command-line console.
 */

import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import throttle from 'lodash/throttle'

import { NLP } from 'components/nlp'
import { Blinker } from 'components/Blinker'

/**
 * PosedTerminalText
 * 
 * This component is used to render the messages that appear on-load.
 * It delays each new message by 1 second for each component before it.
 */

const PosedTerminalText = posed.li({
    enter: {
        opacity: 1,
        delay: ({ i }) => i * 1000,
        transition: { duration: 0 }
    },
    exit: {
        opacity: 0
    },
    flip: {
        transition: {
            default: { type: 'tween', duration: 0 }
        }
    }
})

/**
 * StyledTerminal
 * 
 * CSS for the terminal, which is really just a <ul> element 
 * with some padding and a customized scrollbar.
 */

const StyledTerminal = styled.ul`

    list-style: none;
    padding: 15px;
    margin: 0 15px;
    background: rgba(255, 255, 255, 0.1);
    height: 50vh;
    max-height: 50vh;
    overflow: auto;
    cursor: text;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgb(50, 50, 75);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: #FFB736;
        border-radius: 5px;
    }

`

/**
 * StyledTerminalText
 * 
 * CSS for rendering each line in the terminal.
 * Prepends user input with a foward-arrow.
 */

const StyledTerminalText = styled(PosedTerminalText)`

    position: relative;
    padding-left: 20px;
    line-height: 1.5em;
    word-break: break-word;

    ${(props) => {
        return props.isResponse
        ? null
        : `&:before {
            content: ">";
            font-size: 1.5em;
            position: absolute;
            top: 0;
            left: 0;
        }`
    }}

`

const StyledInput = styled.input`

    background: none;
    border: none;
    outline: none;

    color: white;
    width: 100%;

`

export class Terminal extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            // user input
            terminalInput: '',

            // array of strings that have been rendered
            terminalOut: [],

            // array of user inputs
            terminalHistory: [],

            // tracks how far into the input history a user is
            terminalHistoryIndex: 0

        }

        this.onTerminalKeyDown = throttle(this._onTerminalKeyDown, 200, { trailing: false })

        this.terminalRef = React.createRef()
        this.terminalInputRef = React.createRef()

        this.NLP = new NLP()

    }

    componentDidMount() {
        setTimeout(() => { this.setState({ boot: true }) }, 1000)
    }

    render() {
        const { children } = this.props
        const { boot, terminalOut, terminalInput, terminalFocus } = this.state

        return <StyledTerminal pose={boot ? 'open' : 'closed'} ref={(element) => { this.terminalRef = element}} onClick={this.onTerminalClick}>
            <PoseGroup>

                {boot && children.map((child, i) => { // these should never be re-ordered
                    return <StyledTerminalText key={i} i={i}>
                        {child}
                    </StyledTerminalText>
                })}

                {boot && terminalOut.map((out, i) => {
                    return <StyledTerminalText key={children.length + i} i={0} isResponse={out.isResponse}>
                        {out.text}
                    </StyledTerminalText>
                })}

                {boot && <StyledTerminalText key={'input'} i={children.length + terminalOut.length}>
                    {terminalFocus || terminalInput.length > 0
                        ? null
                        : <Blinker />
                    }
                    <StyledInput
                        ref={(element) => { this.terminalInputRef = element }}
                        value={terminalInput}
                        onFocus={this.onTerminalFocus}
                        onBlur={this.onTerminalBlur}
                        onChange={this.onTerminalChange}
                        onKeyDown={this.onTerminalKeyDown}
                    />
                </StyledTerminalText>}

            </PoseGroup>
        </StyledTerminal>
    }

    onTerminalClick = () => {
        this.terminalInputRef.focus()
    }

    onTerminalFocus = () => {
        this.setState({ terminalFocus: true })
    }

    onTerminalBlur = () => {
        this.setState({ terminalFocus: false })
    }

    onTerminalChange = (event) => {

        if (event.target.value !== this.state.terminalInput) {
            this.setState({ terminalInput: event.target.value })
        }

    }

    _onTerminalKeyDown = (event) => {

        if (event.key === 'Enter' && this.state.terminalInput.length > 0) {

            let input = this.state.terminalInput

            // update our State and reset the terminalInput string
            this.setState({
                terminalOut:            [...this.state.terminalOut, this.buildInput(this.state.terminalInput)], // stack out
                terminalHistory:        [...this.state.terminalHistory, this.state.terminalInput], // stack history
                terminalHistoryIndex:   this.state.terminalHistory.length + 1,
                terminalInput:          ''
            }, () => {

                // after State has been updated, push the scrollbar to the bottom
                this.pinTerminalScrollbar()

            })

            this.processCommand(input)

        } else if (event.key === 'ArrowUp') {

            let currHistoryIndex = this.state.terminalHistoryIndex
            let nextIndex = currHistoryIndex - 1

            if (nextIndex > -1) {
                this.setState({
                    terminalInput: this.state.terminalHistory[nextIndex],
                    terminalHistoryIndex: nextIndex
                })
            }

        } else if (event.key === 'ArrowDown') {

            let currHistoryIndex = this.state.terminalHistoryIndex
            let nextIndex = currHistoryIndex + 1

            if (nextIndex < this.state.terminalHistory.length) {
                this.setState({
                    terminalInput: this.state.terminalHistory[nextIndex],
                    terminalHistoryIndex: nextIndex
                })
            }

        }

    }

    processCommand = (command) => {

        if (command === 'clear') {

            this.setState({
                terminalInput: '',
                terminalOut: []
            })

        } else {

            let response = this.NLP.getAnswer(command)

            if (response === undefined)
                this.appendToOutput(`I'm sorry, I don't have a response to that.`)

            else {
                this.appendToOutput(response)
            }

        }

    }

    pinTerminalScrollbar = () => {
        this.terminalInputRef.scrollIntoView({ behaviour: 'smooth' })
    }

    appendToOutput = (text) => {

        this.setState({
            terminalOut: [
                ...this.state.terminalOut,
                this.buildInput(this.state.terminalInput),
                this.buildResponse(text)
            ]
        })
    }

    buildInput = (text) => {
        return { text }
    }

    buildResponse = (text) => {
        return {
            text,
            isResponse: true
        }
    }

}
