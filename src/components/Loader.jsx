import React from 'react'
import loader from '../assets/loader.svg'
function Loader() {
    return (
        <>
            <div className='w-full justify-center items-center text-center h-screen'>
                <img src={loader} alt="" className='w-64 mx-auto'/>
                <div className='text-center mt-10 text-3xl font-semibold'>No data found!</div>
            </div>
        </>
    )
}

export default Loader
