import React from 'react'

function SocialButtons(props) {
    return (
        <>
            <div className="bg-base-white cursor-pointer rounded-xl m-2 p-2">
                <img src={props.path} className="w-7" alt="" />
            </div>
        </>
    )
}

export default SocialButtons
