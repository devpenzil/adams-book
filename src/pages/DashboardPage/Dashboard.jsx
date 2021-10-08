import React from 'react'
import {useHistory} from 'react-router-dom'
import Createnote from './components/Createnote'
import Notelist from './components/Notelist'
import Topbar from '../../components/Topbar'
function Dashboard() {
    const history = useHistory()
    return (
        <>
            <Topbar user={localStorage.getItem("displayName")} triggerclick={()=>history.push("/profile")}/>
            <div className="container mx-auto flex mt-6">
                <div className="w-2/3 h-screen overflow-x-auto">
                    <Notelist />
                    
                </div>
                <div className="w-1/3 h-screen overflow-x-auto">
                    <Createnote />
                </div>
            </div>
        </>
    )
}

export default Dashboard
