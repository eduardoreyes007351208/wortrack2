import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const style = {
    bg: 'max-w-[700px] mx-auto my-16 p-4',
    heading: `text-2xl font-bold py-2 text-[#B85042]`,
    paragraph: `text-[#B85042] p-4`,
    form: `flex flex-col py-2`,
    label: `py-2 font-medium text-[#B85042]`,
    input: `border p-3 rounded-md`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md`
}

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            alert('Account not found')
            setPassword('')
            console.log(e.message)
        }
    }


    useEffect(() => {
        
    }, [])

  return (
    <div className={style.bg}>
        <div>
            <h3 className={style.heading}>Sign in to your account. </h3>
            <p className={style.paragraph}>
                Don't have an account? <Link to='/signup' className='underline'> Sign up </Link>
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={style.form}>
              <label className={style.label}>Email</label>
              <input className={style.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>  
            <div className={style.form}>
              <label className={style.label}>Password</label>
              <input className={style.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button className={style.button}>Sign In</button>
        </form>
        <div className='flex flex-col items-center justify-center p-4'>
            <p className={style.paragraph}>
                Forgot Password? <Link to='/resetpassword' className='underline'>Reset Password</Link>
            </p>
        </div>
    </div>
  )
}

export default Signin