import React from 'react'
import Logout from '../pages/Logout'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import "./utils.css"
const Navigation = ({isAuthenticated}) => {
    let button=''
    if(isAuthenticated){
        button=<LogoutButton/>
    }
    else button=<LoginButton/>
    return (
        <div className=' bg-green-400'>
            <div className='max-w-5xl flex mx-auto py-5 '>
            <div className='text-blue'>
            InstaMetrics
            </div>
            <div className='ml-auto'>
            <div>
                {button}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navigation