import React from 'react'
import HomeImg from './components/HomeImg'
import SignupForm from './components/SignupForm'
function SignupPage() {
    return (
        <>
            <div className="flex">
                <div className="w-1/2">
                    <HomeImg />
                </div>
                <div className="w-1/2">
                    <SignupForm />
                </div>
            </div>
        </>
    )
}

export default SignupPage
