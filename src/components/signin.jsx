import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn, user} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            alert('Account not found')
            console.log(e.message)
        }
    }

    useEffect(() => {
        console.log(user)
    }, [])

  return (
    <div>
        <div>
            <h3>Sign In</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>  
            <div>
              <label>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button>Sign In</button>
        </form>
    </div>
  )
}

export default Signin