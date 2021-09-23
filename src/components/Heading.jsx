import React from 'react'

function Heading(props) {
    return (
        <div>
            <div className="text-center text-5xl font-semibold">{props.label}</div>
        </div>
    )
}

export default Heading
