import React from 'react'
import { useNavigate } from 'react-router-dom'

const style = {
    bg: 'max-w-[700px] mx-auto my-16 p-4 text-center',
    heading: `text-3xl font-bold py-8 text-[#B85042]`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md`
}



const Pes = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        try {
            navigate('/')
        } catch (e) {
            alert(e.message)
        }
    }

  return (
    <div className={style.bg}>
        <div>
            <h1 className={style.heading}>Email to reset password was sent</h1>
            <button onClick={handleClick} className={style.button}>Return to Sign in</button>
        </div>
    </div>
  )
}

export default Pes