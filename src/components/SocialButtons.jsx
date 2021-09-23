import React from 'react'

function SocialButtons(props) {
    return (
        <div>
            <div className="bg-base-white cursor-pointer rounded-xl m-2 p-2">
                <img src={props.path} className="w-7" alt="" />
            </div>
        </div>
    )
}

export default SocialButtons
