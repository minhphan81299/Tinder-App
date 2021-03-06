import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header__icon'></PersonIcon>
            
            </IconButton>
            <img 
                className="header__logo"
                src="https://phongvu.vn/cong-nghe/wp-content/uploads/2018/09/tinder-logo.png"
                alt=""
            />
            <IconButton>
            
            <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
            </IconButton>
        </div>
    )
}

export default Header
