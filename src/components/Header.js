import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// const Header = (props) => {
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click!!!')
    }

    return (
        <header className='header'>
            <h1 style={headingStyle}>Task Tracker - {title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
            {/* <Button color='blue' text='There' /> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Name',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header
