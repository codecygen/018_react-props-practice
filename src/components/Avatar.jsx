import React from 'react';

const Avatar = (props) => {
    return (
        <img
            src={props.imgURL}
            alt="avatar_img"
            className='circle-img'
        />
    );
}

export default Avatar;