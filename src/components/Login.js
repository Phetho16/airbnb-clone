import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {openModal} from '../components/layout/action/modalAction'
import {login} from '../components/layout/action/userActions'
import  './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const {loading, error, userInfo} = userLogin

    useEffect(() => {
      if(userInfo) {
        dispatch(openModal("open", ""))
      }
    }, [dispatch,userInfo])

    const submitLogin = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }
  return (
    <div className='login-form'>
        <h2>Login or Sign Up</h2>
        {error && <h2>{error}</h2>}
        {loading && <h2>loading...</h2>}
        <form onSubmit={submitLogin}>
        <button className='facebook-login'> Connect With Facebook</button>
        <button className='google-login'>Connect with Google</button>
        <div className='login-or center'>
            <span>or</span>
            <div className='or-divider'></div>
        </div>
        <input
        type='email'value={email}
        onchange={(e) => setEmail(e.target.value)}

        className='browser-default'
        placeholder='Email address'
        />
        <input
        type='password'value={password}
        onchange={(e) => setPassword(e.target.value)}
        className='browser-default'
        placeholder='Password'
        />
        <button className='sign-up-button'>Login</button>
        <div>Don't have an account? Sign Up</div>
        </form>
    </div>
  )
}

export default Login