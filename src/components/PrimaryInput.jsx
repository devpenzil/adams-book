import React from 'react'

function PrimaryInput(props) {
    return (
        <>
            <div className="mt-6">
                <div className="font-semibold">{props.label}</div>
                <input style={{backgroundColor:`${props.bg}`}} value={props.value} className="p-2 w-full font-semibold bg-green-appgreen border-2 border-green-appgreendark rounded-xl outline-none" type={props.type}  />
            </div>
        </>
    )
}

export default PrimaryInput
