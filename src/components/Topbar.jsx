import React from 'react'

function Topbar() {
    return (
        <div>
            <div className="w-ful bg-green-appgreen h-14 flex px-4 justify-between items-center">
                <div>
                    <div className="text-2xl font-semibold">Adam's Book</div>
                </div>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/67946056?v=4" className="h-11 rounded-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topbar

