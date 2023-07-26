import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const style = {
    bg: 'max-w-[700px] mx-auto my-16 p-4',
    heading: `text-2xl font-bold py-2 text-[#B85042]`,
    paragraph: `text-[#B85042]`,
    form: `flex flex-col py-2`,
    label: `py-2 font-medium text-[#B85042]`,
    input: `border p-3 rounded-md`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md`
}

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {createUser, verify} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUser(email, password)
            await verify()
            navigate('/userverify')
        } catch (e) {
            alert('Account already exists')
            setPassword('')
            console.log(e.message)
        }
    }

    useEffect(() => {
        
    }, [])

  return (
    <div className={style.bg}>
        <div>
            <h3 className={style.heading}>Create a free account </h3>
            <p className={style.paragraph}>
                Already have an account? <Link to='/' className='underline'> Sign in </Link>
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
            <button className={style.button}>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup