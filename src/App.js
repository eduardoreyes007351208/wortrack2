import React, { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Account from './components/account'
import Signin from './components/signin'
import Signup from './components/signup'
import Userinfo from './components/userinfo'
import Resetpassword from './components/resetpassword'
import Pes from './components/pes'
import Userverify from './components/userverify'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const style = {
  bg: `h-full w-full max-w-[2000px] p-4 bg-cover bg-[#E7E8D1]`,
  heading: `text-6xl font-bold py-2 text-[#B85042] text-center italic`,
  heading2: `text-lg font-bold py-2 text-[#B85042] text-center`
}

function App() {

  useEffect(() => {
    document.title = 'WorTrack'
  }, [])

  return (
    <div className={style.bg}>
      <h1 className={style.heading}>WorTrack</h1>
      <h2 className={style.heading2}>The Workout Tracking Website</h2>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path='/userinfo' element={<ProtectedRoute><Userinfo/></ProtectedRoute>} />
        <Route path='/resetpassword' element={<Resetpassword />} />
        <Route path='/pes' element={<Pes />} />
        <Route path='/userverify' element={<Userverify />} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
