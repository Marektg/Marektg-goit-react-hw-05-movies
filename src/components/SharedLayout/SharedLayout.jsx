import React from 'react'
import PropTypes from 'prop-types'
import { Header, Item, List, MainLink } from './SharedLayout.styled';

function SharedLayout(props) {
    return (
        <>
            <Header>
                <nav>
                    <List>
                        <Item>
                            <MainLink to="/">Home</MainLink>
                        </Item>
                        <Item>
                            <MainLink to="/movies">Movies</MainLink>
                        </Item>
                    </List>
                </nav>
            </Header>

            <Outlet />
        </>
    )
}

SharedLayout.propTypes = {}

export default SharedLayout
