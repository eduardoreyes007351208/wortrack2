import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Account from './components/account'
import Signin from './components/signin'
import Signup from './components/signup'
import Userinfo from './components/userinfo'
import { AuthContextProvider } from './context/AuthContext'

const style = {
  bg: `h-full w-full max-w-[2000px] p-4 bg-cover bg-[#E7E8D1]`
}

function App() {
  return (
    <div className={style.bg}>
      <h1>hello</h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/account' element={<Account/>} />
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/userinfo' element={<Userinfo/>} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
