import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from './Button'
import Form from './Form'
import TextInput from './TextInput'

import classes from "../styles/Login.module.css";
import { useAuth } from '../contexts/SignupContext'
export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {login,currentUser} = useAuth()


  async function handleSubmit(e){
    e.preventDefault()

    try {
        setError('')
        setLoading(true)
        await login(email,password)
        history.push('/')
    } catch (error) {
        console.log(error)
        setLoading(false)
        setError('Failed to Login')
        
    }
}
    return (
        <Form className={`${classes.login}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
           value={email} onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
         type="password"
          placeholder="Enter password" 
          icon="lock" 
         value={password}
          onChange={(e) => setPassword(e.target.value)}/>

        <Button type="submit"><span> Submit Now</span></Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    )
}
