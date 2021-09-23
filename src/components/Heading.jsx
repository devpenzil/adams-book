import React from 'react'

function Heading(props) {
    return (
        <>
            <div className="text-center text-5xl font-semibold">{props.label}</div>
        </>
    )
}

export default Heading
