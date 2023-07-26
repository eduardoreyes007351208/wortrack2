import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const style = {
    bg: 'max-w-[700px] mx-auto my-16 p-4 text-center',
    heading: `text-3xl font-bold py-2 text-[#B85042]`,
    heading2: `text-xl font-bold py-4 text-[#B85042]`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md`,
    button2: `w-full p-4 text-[#B85042] rounded-md underline`
}

const Userverify = () => {
    const navigate = useNavigate()
    const {user} = UserAuth()

    const handleClick = (e) => {
        e.preventDefault()
        try {
            if(!user.emailVerified) {
                alert('Please verify email')
            } else {
                navigate('/')
            }
             
        } catch (e) {
            alert(e.message)
        }
    }

    const handleRefresh = (e) => {
        e.preventDefault()
        window.location.reload(false)
    }

  return (
    <div className={style.bg}>
        <div>
            <h1 className={style.heading}>Verification email sent</h1>
            <h3 className={style.heading2}>Check your email to verify account</h3>
            <button className={style.button} onClick={handleClick}>Return to sign in</button>
            <button onClick={handleRefresh} className={style.button2}>Click here after verifying</button>
        </div>
    </div>
  )
}

export default Userverify