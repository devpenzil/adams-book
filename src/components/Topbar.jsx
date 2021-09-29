import React from 'react'

function Topbar(props) {
    return (
        <>
            <div className="w-ful bg-green-appgreen h-14 flex px-4 justify-between items-center">
                <div>
                    <div className="text-2xl font-semibold">Adam's Book</div>
                </div>
                <div>
                    <div className="text-xl font-semibold cursor-pointer">{props.user}</div>
                </div>
            </div>
        </>
    )
}

export default Topbar

