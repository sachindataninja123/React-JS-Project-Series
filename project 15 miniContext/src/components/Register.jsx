import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Register = () => {
    const {user} = useContext(userContext);

  return (
    <div>
      <h1>Your Registration is SuccessFull</h1>
      {user && (
        <p>UserName : {user.userName}</p>
      )}
    </div>
  )
}

export default Register
