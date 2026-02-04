import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>plese Login</div>

    return <div> welcome {user.username}</div>
  return (
    <div>
      
    </div>
  )
}

export default Profile
