import React from 'react'

function ProfileImage(props) {
    return (
        <div>
            <img src={props.path} alt=""  className="w-56 mx-auto rounded-full"/>
        </div>
    )
}

export default ProfileImage
