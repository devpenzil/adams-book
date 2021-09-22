import React from 'react'
import Logout from '../components/Logout'
import Profileform from '../components/Profileform'
import Topbar from '../components/Topbar'
function ProfilePage() {
    return (
        <div>
            <Topbar />
            <Logout />
            <Profileform />
        </div>
    )
}

export default ProfilePage
