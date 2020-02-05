
/**
 * header.js
 */

import React from 'react'
import styled from 'styled-components'
import stickyfill from 'stickyfilljs'

import { Link } from 'components/link'

const Nav = styled.nav`

    position: sticky;
    top: 0;
    z-index: 999;

    height: 100px;
    padding: 0 20px;
    text-align: center;
    background: #1a1325;

`

const List = styled.ul`

    display: block;
    list-style: none;
    padding: 0;
    margin: 0;

`

const ListItem = styled.li`

    display: inline-block;
    margin: 0 10px;

    a, a:visited {
        text-decoration: none;
        color: white;
    }

`

// this should be the only H1 on the page
const Title = styled.h1`

    a, a:visited { color: #FFB736; }

`

const NavLink = styled(Link)`

    text-transform: uppercase;
    font-size: 0.8em;

    &:focus, &:hover {
        outline: none;

        :after {
            content: "";
            display: block;
            position: absolute;
            bottom: -10px;
            height: 8px;
            width: 100%;
            background: #ffb73b;
        }
    }

`

export class Header extends React.Component {

    constructor(props) {
        super(props)
        this.navRef = React.createRef()
    }

    componentWillMount() {
        if (stickyfill.addOne) {
            stickyfill.addOne(this.navRef)
        }
    }

    componentWillUnmount() {
        if (stickyfill.removeOne) {
            stickyfill.removeOne(this.navRef)
        }
    }

    render() {

        return <Nav ref={this.navRef}>
            <List style={{
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)'
            }}>

                <ListItem style={{ display: 'block' }}><List>

                    <ListItem>
                        <Title>
                            <Link key='/' to='/'>{'{ HEART OF CODE }'}</Link>
                        </Title>
                    </ListItem>

                </List></ListItem>

                <ListItem style={{ display: 'block' }}><List>

                    <ListItem>
                        <NavLink to='/work'>Work</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to='/about'>About</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to='/connect'>Connect</NavLink>
                    </ListItem>

                </List></ListItem>

            </List>
        </Nav>

    }

}