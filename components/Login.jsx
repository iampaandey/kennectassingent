"use client"

import { useState } from 'react'
import Link from 'next/link'


const Login = ({ isLogin, setIsLogin }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useState("")
  const handleLogin = async () => {
    const formData = {
      username: name || user,
      password: password
    }
    const response = await fetch("./api/auth/login", {
      method: "POST",
      body: JSON.stringify(formData)
    })

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data));
      }
      setIsLogin(!isLogin)
      alert('Login Successfull ! Go Write Something Cool')
    } else {
      alert('Error Occured !')
    }


  }

  return (
    <div className="signin">

      <div className="content">

        <h2 className='login-title'>Log In</h2>

        <div className="form">

          <div className="inputBox">

            <input type="text" autocomplete="off" required value={name} onChange={(w) => { setName(w.target.value) }} /> <i>Username</i>

          </div>

          <div className="inputBox">

            <input type="password" autocomplete="off" required value={password}
              onChange={(w) => { setPassword(w.target.value) }}
            /> <i>Password</i>

          </div>

          <div className="links"><Link href="/register" className='link-tag'>Register ?</Link>

          </div>

          <div className="inputBox">


            <button className="buttn-submit" onClick={handleLogin}>
              Log In
            </button>

          </div>
        </div>

      </div>
      <h2>OR</h2>
      <div className="inputBox">

<input type="text" required value={user} onChange={(w) => { setUser(w.target.value) }} /> <i>Username</i>

</div>
<button className="buttn-submit" onClick={handleLogin}>
              Continue
            </button>
    </div>


  )
}

export default Login
