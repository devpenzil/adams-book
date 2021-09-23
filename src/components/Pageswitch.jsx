import React from 'react'

function Pageswitch(props) {
    return (
        <div>
            <div className="text-center mt-8">
                {props.label} <a href="#" className="underline">{props.question}</a>
            </div>
        </div>
    )
}

export default Pageswitch
