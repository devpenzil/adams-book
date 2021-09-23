import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInput from '../../../components/PrimaryInput'
function Password() {
    return (
        <>
            <div>
            <PrimaryInput label={"Old Password"} type={"password"} bg={"white"}  />
            <PrimaryInput label={"New Password"} type={"password"} bg={"white"}  />
            <PrimaryInput label={"Retype Password"} type={"password"} bg={"white"}  />
            <PrimaryButton label={"update"} />
            </div>
        </>
    )
}

export default Password
