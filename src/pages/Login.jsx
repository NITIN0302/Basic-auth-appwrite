import React, { useState } from 'react'

const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password:""
  });



  const loginFunc = async () => {
    // APPWRITE CONFIGURATION
    
  }



  return (
    <>
      <div id="login-main">
        <div id="login-form">
            <h2 id="login-h2">Login</h2>
            <input type="email" id="login-input" placeholder='Email' onChange={(e) => setUserData({...userData, email: e.target.value})}/>
            <input type="text" id="login-input" placeholder='Password' onChange={(e) => setUserData({...userData, password: e.target.value})}/>
            <button onClick={loginFunc} id="login-btn">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login