import React, { useContext } from 'react'
import userContext from '../Contexts/UserContext'

function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <div>please login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile