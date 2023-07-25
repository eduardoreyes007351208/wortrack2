import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style = {
    li: `flex bg-[#A7BEAE] rounded-md justify-between p-4 my-2 mx-3 capitalize shadow-xl`,
    row: `text-center`,
    text: `text-center sm:text-left text-[#B85042] text-md font-semibold`,
    button: `items-end text-[#B85042] font-bold flex`
}

const Workouts = ({workout, deleteWorkout}) => {
  return (
    <li className={style.li}>
        <div className={style.row} >
            <p className={style.text}>Date: {workout.date}</p>
            <p className={style.text}>Name: {workout.wn}</p>
            <p className={style.text}>Weight: {workout.wt} lbs</p>
            <p className={style.text}>Reps: {workout.reps} </p>
            <p className={style.text}>Sets: {workout.sets} </p>
            
        </div>
        <button onClick={() => deleteWorkout(workout.id)} className={style.button}> {<FaRegTrashAlt/>} </button>
    </li>
  )
}

export default Workouts