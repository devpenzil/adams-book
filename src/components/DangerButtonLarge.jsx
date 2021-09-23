import React from 'react'

function DangerButtonLarge(props) {
    return (
        <div>
             <div className="mt-6 mb-6">
                <button className="p-2 w-full bg-base-red  hover:opacity-60 font-semibold  border-2 border-base-red text-base-white rounded-xl outline-none">{props.label}</button>
            </div>
        </div>
    )
}

export default DangerButtonLarge
