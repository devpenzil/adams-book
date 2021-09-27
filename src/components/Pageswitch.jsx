import React from 'react'

function Pageswitch(props) {
    return (
        <>
            <div className="text-center mt-8">
                {props.label} <span className="underline cursor-pointer" onClick={props.triggerclick}>{props.question}</span>
            </div>
        </>
    )
}

export default Pageswitch
