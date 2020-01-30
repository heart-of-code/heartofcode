
import styled from 'styled-components'

export const Text = styled.input.attrs(props => ({
    type: 'text',
    id: props.uid,
    name: props.uid,
}))`
    display:        block;
    width:          400px;
    padding:        10px;
    margin:         10px;
    margin-left:    0;

    ${props => props.injectStyle}
`

export const TextArea = styled.textarea.attrs(props => ({
    cols: props.cols || 40,
    rows: props.rows || 2,
    id: props.uid,
    name: props.uid,
}))`
    display:        block;
    width:          400px;
    padding:        10px;
    margin:         10px;
    margin-left:    0;

    resize:         ${props => props.resize || 'both'};

    ${props => props.injectStyle}
`