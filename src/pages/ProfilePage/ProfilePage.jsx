import React from 'react'
import {useHistory} from 'react-router-dom'
import Topbar from '../../components/Topbar'
import DangerButtonSmall from '../../components/DangerButtonSmall'
import ProfileImage from './components/ProfileImage'
import Details from './components/Details'
import HorizontalRule from '../../components/HorizontalRule'
import Password from './components/Password'
import DangerButtonLarge from '../../components/DangerButtonLarge'
function ProfilePage() {
    const history = useHistory()
    const logout = () => {
        localStorage.clear()
        history.push("/")
    }
    return (
        <>
            <Topbar />
            <div className="text-right p-4">
                <DangerButtonSmall label={"logout"} triggerclick={()=>logout()}/>
            </div>
            <div className="w-96 mx-auto mt-20">
            <ProfileImage path={"https://avatars.githubusercontent.com/u/67946056?v=4"}/>
            <Details />
            <HorizontalRule />
            <Password />
            <HorizontalRule />
            <div>
                <DangerButtonLarge label={"Delete my accunt"} />
            </div>
            </div>
            
        </>
    )
}

export default ProfilePage
