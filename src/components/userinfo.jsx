import { doc, setDoc} from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const style = {
    bg: `h-full bg-[#E7E8D1]`,
    heading: `text-2xl font-bold py-2 text-[#B85042]`,
    paragraph: `text-[#B85042] text-center p-4`,
    paragraph2: `text-[#B85042] text-center p-4 text-bold`,
    form: `flex flex-col py-2`,
    label: `py-2 font-medium text-[#B85042]`,
    input: `border p-4 rounded-md`,
    button: `border boarder-[#A7BEAE] bg-[#A7BEAE] hover:bg-[#B85042] hover:text-white w-full p-4 text-white rounded-md p-4`
  }

const Userinfo = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const {user} = UserAuth()
    const navigate = useNavigate()
    

    const createUserInfo = async (e) => {
        e.preventDefault(e);
        if(firstName ==='' || lastName === '') {
            alert('Please Enter First and Last Name')
            return
        }
        try{
            await setDoc(doc(db, 'users', user.uid), {
                fn: firstName,
                ln: lastName,
            })
            navigate('/account')
        } catch{
            console.log(e.message)
        }
        
    }

    useEffect(() => {
        
        
    }, [])


    return (
    <div className={style.bg}>
        <div className={style.container}>
            <h2 className={style.heading}>Add your information.</h2>
        </div>
        <form onSubmit={createUserInfo}>
            <div className={style.form}>
                <label className={style.label}>First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={style.input} type="text" placeholder='Ex: John' />
            </div>
            <div className={style.form}>
                <label className={style.label}>Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={style.input} type="text" placeholder='Ex: Doe' />
            </div>
            <button className={style.button}>Continue</button>
        </form>
    </div>
  )
}

export default Userinfo