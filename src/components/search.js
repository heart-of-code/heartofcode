
/**
 * search.js
 * 
 * Component for searching the website (via google)
 */

import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { getKey } from './utils/get-key';

const SearchWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`

const SearchField = styled.input`
    padding: 10px 30px 10px 10px;
    width: 100%;
`

const Submit = styled.button`

    /* remove default button styles */
    -webkit-appearance: none;
    background: none;
    border: none;

    /* place the search button over the right-hand side of the search field */
    position: absolute;
    padding: 10px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 0;

    /* make it appear clickable */
    cursor: pointer;
`

export class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    render() {
        return <SearchWrapper>
            <SearchField value={this.state.search} onKeyDown={this._onKeySearch} onChange={this._onChangeSearch} />
            <Submit onClick={this._onSubmit}><FaSearch /></Submit>
        </SearchWrapper>
    }

    _onKeySearch = (e) => {
        if (getKey(e) === 'Enter') {
            this._onSubmit()
        }
    }

    _onChangeSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    _onSubmit = (e) => {
        if (window) {
            let query = encodeURIComponent(`${this.state.search}`)
            window.location.replace(`https://google.com/search?q=site%3Ahttp%3A%2F%2Fheartofcode.net+${query}`)
        }
    }

}

export default Search