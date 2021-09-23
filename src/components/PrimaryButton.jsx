import React from 'react'

function PrimaryButton(props) {
    return (
        <div>
            <div className="mt-6 text-white">
                <button className="p-2 w-full font-semibold bg-green-appgreendark border-2 border-green-appgreendark rounded-xl outline-none text-base-white hover:opacity-60">{props.label}</button>
            </div>
        </div>
    )
}

export default PrimaryButton
