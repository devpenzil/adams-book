import React from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
function SignupForm() {
    return (
        <div>
            <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
                <div>
                    <div className="text-center text-5xl font-semibold">Create a new Book</div>
                    <div>
                        <div className="mt-6">
                            <div className="font-semibold">Email</div>
                            <input autoFocus className="p-2 w-full   font-semibold bg-green-appgreen border-2 border-green-appgreendark rounded-xl outline-none" type="email" name="username" id="username" />
                        </div>
                        <div className="mt-6">
                            <div className="font-semibold">Username</div>
                            <input className="p-2 w-full   font-semibold bg-green-appgreen border-2 border-green-appgreendark rounded-xl outline-none" type="text" name="username" id="username" />
                        </div>
                        <div className="mt-6">
                            <div className="font-semibold">Password</div>
                            <input className="p-2 w-full  font-semibold bg-green-appgreen border-2 border-green-appgreendark rounded-xl outline-none" type="password" name="username" id="username" />
                        </div>
                        <div className="mt-6 text-white">
                            <button className="p-2 w-full font-semibold bg-green-appgreendark border-2 border-green-appgreendark rounded-xl outline-none text-base-white hover:opacity-60">Signu Up</button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="text-center text-xl">or sign up with</div>
                        <div className="flex justify-center">
                            <div className="bg-base-white cursor-pointer rounded-xl m-2 p-2">
                                <img src={google} className="w-7" alt="" />
                            </div>
                            <div className="bg-base-white cursor-pointer rounded-xl m-2 p-2">
                                <img src={facebook} className="w-7" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        Already have an acoount? <a href="#" className="underline">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
