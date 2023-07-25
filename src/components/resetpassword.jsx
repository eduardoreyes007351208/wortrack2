import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const style = {
    bg: 'max-w-[700px] mx-auto my-16 p-4',
    heading: `text-2xl font-bold py-2 text-[#B85042]`,
    paragraph: `text-[#B85042] p-2`,
    form: `flex flex-col py-2`,
    label: `py-2 font-medium text-[#B85042]`,
    input: `border p-3 rounded-md`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md`
}

const Resetpassword = () => {
    const [email, setEmail] = useState('')
    const {resetPassword} = UserAuth()
    const navigate = useNavigate()

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            if(email === '') {
                alert('Please enter email')
            } else {
                resetPassword(email)
                navigate('/pes')
            }
            
        } catch {
            alert(e.message)
        }
    }


  return (
    <div className={style.bg}>
        <div>
            <h1 className={style.heading}>Reset Password</h1>
            <form onSubmit={sendEmail}>
                <div className={style.form}>
                    <label className={style.label}>Enter Email</label>
                    <input className={style.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <button className={style.button}>Send Email</button>
            </form>
            
        </div>
    </div>
  )
}

export default Resetpassword