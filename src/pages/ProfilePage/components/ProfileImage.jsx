import React from 'react'

function ProfileImage(props) {
    return (
        <>
            <img src={props.path} alt=""  className="w-56 mx-auto rounded-full"/>
        </>
    )
}

export default ProfileImage
