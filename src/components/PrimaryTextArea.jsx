import React from 'react'

function PrimaryTextArea(props) {
    return (
        <>
            <div className="mt-6">
                <div className="font-semibold">{props.label}</div>
                <textarea className="p-2 w-full font-semibold bg-base-white border-2 border-green-appgreendark rounded-xl outline-none" name="content" id="content" cols="30" rows="10"></textarea>
            </div>
        </>
    )
}

export default PrimaryTextArea
