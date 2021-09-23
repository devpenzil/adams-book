import React from 'react'
import HomeImg from './components/HomeImg'
import LoginForm from './components/LoginForm'
function LoginPage() {
    return (
        <div>
            <div className="flex">
                <div className="w-1/2">
                    <HomeImg />
                </div>
                <div className="w-1/2">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
