import React from 'react'
import google from '../../../assets/google.png'
import facebook from '../../../assets/facebook.png'
import Heading from '../../../components/Heading'
import PrimaryInput from '../../../components/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton'
import SocialButtons from '../../../components/SocialButtons'
import Pageswitch from '../../../components/Pageswitch'
function SignupForm() {
    return (
        <>
            <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
                <div>
                   <Heading label={"Create your Book"}/>
                    <div>
                        <PrimaryInput label={"Email"} type={"email"}/>
                        <PrimaryInput label={"UserName"} type={"text"}/>
                        <PrimaryInput label={"Password"} type={"password"}/>
                        
                        <PrimaryButton label={"Sign up"} />
                    </div>
                    <div className="mt-8">
                        <div className="text-center text-xl">or sign up with</div>
                        <div className="flex justify-center">
                            <SocialButtons path={google} />
                            <SocialButtons path={facebook} />
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Pageswitch label={"Already have an acoount?"}  question={"Sign in"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm
