
import { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import {useAuth} from '../contexts/SignupContext'

export default function SignupForm() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agree, setAgree] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const {signup} = useAuth()


    async function handleSubmit(e){
        e.preventDefault()

        if(password !== confirmPassword){
          return  setError('Password dont match')
        }else if(password.length !== 6){
            return  setError('Password length must be 6 characters')
        }

        try {
            setError('')
            setLoading(true)
            await signup(email,password,userName)
            history.push('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError('Failed to create an account')
            
        }
    }
    return (
        <Form style={{ height: '500px'}} onSubmit={handleSubmit}>
          <TextInput 
          type="text" 
          placeholder="Enter name"
            icon="person" value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required 

         
         />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
             value={email} onChange={(e) => setEmail(e.target.value)}
             required 

          />

          <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} 
          required 
          />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
             value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 

          />

          <Checkbox text="I agree to the Terms &amp; Conditions"  value={agree} onChange={(e) => setAgree(e.target.value)}
          required 
          />

          <Button disabled={loading} type="submit" ><span> Submit Now</span></Button>
        {error && <p className="error">{error}</p>}
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
    )
}
