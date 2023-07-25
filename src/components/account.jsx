import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
    const navigate = useNavigate()
    const {logout} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logout()
            navigate('/')
        } catch (e) {
            alert(e.message)
        }   
     }

     useEffect(() => {
        
     }, [])

  return (
    <div>
        <div>
            <button onClick={handleSubmit}>Log Out</button>
        </div>
    </div>
  )
}

export default Account