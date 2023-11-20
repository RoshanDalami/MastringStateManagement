/* eslint-disable no-unused-vars */
import React,{useState , useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username,setUsername] = useState('')
    const [password, setpassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' />
      </div>
      <button onClick={handleSubmit} >
        Submit
      </button>
    </div>
  )
}
