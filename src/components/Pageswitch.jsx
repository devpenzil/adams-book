import React from 'react'

function Pageswitch(props) {
    return (
        <>
            <div className="text-center mt-8">
                {props.label} <a href="#" className="underline">{props.question}</a>
            </div>
        </>
    )
}

export default Pageswitch
