import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import { db } from '../firebase'
import Workouts from './workouts'
import { addDoc, doc, collection, query, onSnapshot, orderBy, deleteDoc } from 'firebase/firestore'
import dayjs from 'dayjs'

const style = {
    bg: `h-full w-full p-4 bg-cover bg-[#E7E8D1]`,
    containters: `w-full h-full m-auto rounded-md p-4`,
    heading2: `text-[#B85042]`,
    heading: `text-2xl font-bold text-center text-[#B85042] p-2`,
    form: `flex justify-between text-[#B85042] text-lg font-semibold text-center p-3`,
    label: `p-3`,
    input: `border border-[#A7BEAE] p-3 w-4/5 text-xl rounded-md`,
    list: `grid grid-cols-2 `,
    buttonPlus: `text-[#B85042] text-center`,
    button: `border border-[#A7BEAE] px-6 py-2 my-4 bg-[#A7BEAE] text-[#B85042] rounded-md shadow-xl text-md font-bold`
  }

const Account = () => {
    const {user, logout} = UserAuth() 
    const [firstname, setFirstName] = useState('')
    const navigate = useNavigate()
    const [workoutName, setworkoutName] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [sets, setSets] = useState('')
    const [userFN, setUserFN] = useState([])
    const [workout, setWorkouts] = useState([])
    const dates = new Date()
    const shortFormat = dayjs(dates).format('MM/DD/YYYY')
    const unix = dayjs().unix()
    const userid = user.uid

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logout()
            navigate('/')
        } catch (e) {
            alert(e.message)
        }   
    }

    const createUserChildren = async (e) => {
    
        e.preventDefault(e);
        if(workoutName==='' || weight==='' || reps==='' || sets==='') {
          alert('Please enter workout name, weight, reps, and sets')
          return
        }
        await addDoc(collection(db, `users/${userid}/workouts`, ), {
          wn: workoutName,
          wt: weight,
          reps: reps,
          sets: sets,
          date: shortFormat,
          unixDate: unix
        })
        setworkoutName('')
        setWeight('')
        setReps('')
        setSets('')
        
    }

    const deleteWorkout = async (id) => {
        await deleteDoc(doc(db, `users/${userid}/workouts`, id))
    }
    

    useEffect(() => {
        
          
      const getName = () => {
        const unsub = onSnapshot(doc(db, 'users', userid), (doc) => {
          setUserFN(doc.data())
          setFirstName(userFN.fn)
        })
        return () => unsub()
      }
      
          
        
        

   

      const getWorkoutss = () => {
        const q = query(collection(db, `users/${userid}/workouts`), orderBy('unixDate', 'desc'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let workoutArr = []
          querySnapshot.forEach((doc) => {
            workoutArr.push({...doc.data(), id: doc.id})
          })
          setWorkouts(workoutArr)
        })
        return () => unsubscribe()
        }
        (async () => {
          await getName()
          await getWorkoutss()
        })()
        return () => {}
        
    }, [userid, navigate, userFN, user.emailVerified])

     return (
        <div className={style.bg}>
          <h1 className={style.heading}>Welcome {firstname}!</h1>
          <div className={style.containters}>
            <form onSubmit={createUserChildren} className={style.form} >
              <div>
                <label className={style.label}>Exercise: </label>
                <input value={workoutName} onChange={(e) => setworkoutName(e.target.value)} className={style.input} type="text" placeholder='Ex: Bench Press' />
              </div>
              <div>
                <label className={style.label}>Weight: </label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} className={style.input} type="text" placeholder='Ex: 45'/>
              </div>
              <div>
                <label className={style.label}>Reps: </label>
                <input value={reps} onChange={(e) => setReps(e.target.value)} className={style.input} type="text" placeholder='Ex: 8'/>
              </div>
              <div>
                <label className={style.label}>Sets: </label>
                <input value={sets} onChange={(e) => setSets(e.target.value)} className={style.input} type="text" placeholder='Ex: 4'/>
              </div>
              <button className={style.buttonPlus}> <AiOutlinePlus size={30}/> </button>
            </form>
            <ul className={style.list}>
              {workout.map((workout, index) => (
                <Workouts key={index} workout={workout} deleteWorkout={deleteWorkout}/>
              ))}
            </ul>
          </div>
    
          <button onClick={handleSubmit} className={style.button}>Logout</button>
        </div>
      )
}

export default Account