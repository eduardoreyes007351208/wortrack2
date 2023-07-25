import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Resetpassword = () => {
    const [email, setEmail] = useState('')
    const {resetPassword} = UserAuth()
    const navigate = useNavigate()

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            resetPassword(email)
        } catch {
            alert(e.message)
        }
    }

    const returnHp = () => {
        navigate('/')
    }

  return (
    <div>
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={sendEmail}>
                <div>
                    <label>Enter Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <button>Send Email</button>
            </form>
            <button onClick={returnHp}>Return Homepage</button>
        </div>
    </div>
  )
}

export default Resetpassword