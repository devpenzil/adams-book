import React from 'react'

function DangerButtonSmall(props) {
    return (
        <>
            <div>
                <button onClick={props.triggerclick} className="bg-base-red px-4 py-2 hover:opacity-60 text-base-white text-base font-semibold rounded-md">{props.label}</button>
            </div>
        </>
    )
}

export default DangerButtonSmall
