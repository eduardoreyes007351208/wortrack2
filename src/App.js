import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Account from './components/account'
import Signin from './components/signin'
import Signup from './components/signup'
import Userinfo from './components/userinfo'
import Resetpassword from './components/resetpassword'
import Pes from './components/pes'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const style = {
  bg: `h-full w-full max-w-[2000px] p-4 bg-cover bg-[#E7E8D1]`
}

function App() {
  return (
    <div className={style.bg}>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path='/userinfo' element={<ProtectedRoute><Userinfo/></ProtectedRoute>} />
        <Route path='/resetpassword' element={<Resetpassword />} />
        <Route path='/pes' element={<Pes />} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
