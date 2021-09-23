import React from 'react'
import PrimaryInput from '../../../components/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton'
function Details() {
    return (
        <div>
            <PrimaryInput label={"Username"} type={"text"} bg={"white"} value={"devpenzil"} />
            <PrimaryInput label={"Name"} type={"text"} bg={"white"} value={"Ajo Alex"} />
            <PrimaryInput label={"Email"} type={"email"} bg={"white"} value={"ajoalex012@gmail.com"} />
            <PrimaryButton label={"update"} />
        </div>
    )
}

export default Details
