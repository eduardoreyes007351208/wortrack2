import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Account from './components/account'
import Signin from './components/signin'
import Signup from './components/signup'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/account' element={<Account/>} />
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
