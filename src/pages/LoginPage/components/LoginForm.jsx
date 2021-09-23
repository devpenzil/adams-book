import React from 'react'
import google from '../../../assets/google.png'
import facebook from '../../../assets/facebook.png'
import PrimaryInput from '../../../components/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton'
import SocialButtons from '../../../components/SocialButtons'
import Heading from '../../../components/Heading'
import Pageswitch from '../../../components/Pageswitch'
function LoginForm() {
    return (
        <>
            <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
                <div>
                    <Heading label={"Open Your Book"} />
                    <div>
                        <PrimaryInput label={"UserName"} type={"text"}/>
                        <PrimaryInput label={"Password"} type={"password"}/>
                        <PrimaryButton label={"Login"}/>
                    </div>
                    <div className="mt-8">
                        <div className="text-center text-xl">or sign in with</div>
                        <div className="flex justify-center">
                            <SocialButtons path={google} />
                            <SocialButtons path={facebook} />
                        </div>
                    </div>
                    <Pageswitch label={"don't have an account ?"} question={"create one"}/>
                </div>
            </div>
        </>
    )
}

export default LoginForm
