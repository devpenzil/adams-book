import React from 'react'

function Profileform() {
    return (
        <div>
            <div className="w-96 mx-auto mt-20">
                <img src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""  className="w-56 mx-auto rounded-full"/>
                <div>
                    <div className="mt-6">
                        <div className="font-semibold">Username</div>
                        <input value="devpenzil" className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="text"  />
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">Name</div>
                        <input value="Ajo Alex" autoFocus className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="text"  />
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">Email</div>
                        <input value="ajoalex012@protonmail.com" autoFocus className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="text"  />
                    </div>
                    <div className="mt-6">
                        <button className="p-2 w-full bg-green-appgreendark  font-semibold  border-2 border-green-appgreendark text-base-white rounded-xl outline-none">Update</button>
                    </div>
                </div>

                <hr className="w-full h-1 bg-green-appgreendark my-12" />

                <div>
                    <div className="mt-6">
                        <div className="font-semibold">Current Password</div>
                        <input  className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="password"  />
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">New Password</div>
                        <input   className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="password"  />
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">Retype Password</div>
                        <input   className="p-2 w-full   font-semibold  border-2 border-green-appgreendark rounded-xl outline-none" type="password"  />
                    </div>
                    <div className="mt-6">
                        <button className="p-2 w-full bg-green-appgreendark  font-semibold  border-2 border-green-appgreendark text-base-white rounded-xl outline-none">Update</button>
                    </div>
                </div>

                <hr className="w-full h-1 bg-green-appgreendark my-12" />

                <div className="mt-6 mb-6">
                        <button className="p-2 w-full bg-base-red  font-semibold  border-2 border-base-red text-base-white rounded-xl outline-none">Delete my account</button>
                    </div>
            </div>
        </div>
    )
}

export default Profileform
