import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='navbar-item'>
                Flash Cards
            </Link>
            <Link to='/manage' className='navbar-item'>
                Manage Cards
            </Link>
        </div>
    );
};

export default Header;
