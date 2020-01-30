
import styled from 'styled-components'

export const Button = styled.button.attrs(props => ({
    type: props.type || 'submit'
}))`
    -webkit-appearance: none;

    background: white;
    border: none;

    text-transform: uppercase;
    font-size: 1.25em;

    padding:    10px 50px;
    display:    block;
    margin:     50px auto 0;

    &:focus {
        background: #CDDC39;
    }

    ${props => props.injectStyle}
`