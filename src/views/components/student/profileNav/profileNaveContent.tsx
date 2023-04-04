import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, NavDivider } from './styles'

const ProfileNavContent: React.FC = (props) => {
    const navRef = useRef(null);

    return (
        <Nav>
            <ul>
                <li><NavLink to={'/myaccount/settings'} >Account settings</NavLink></li>
                <li><NavLink to={'/myaccount/profile'} >Edit profile</NavLink></li>
                <li><NavLink to={'/myaccount/payment/new'} >Payment method</NavLink></li>
            </ul>

            <NavDivider />
            <span className='delete-btn'>Delete account</span>
        </Nav>
    )
}

export default ProfileNavContent;