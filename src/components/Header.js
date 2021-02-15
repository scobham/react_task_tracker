import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// const Header = (props) => {
const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click!!!')
    // }

    return (
        <header className='header'>
            <h1 style={headingStyle}>Task Tracker - {title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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
