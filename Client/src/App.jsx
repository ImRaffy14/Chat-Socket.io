import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <LoginPage/> } />
            <Route path="/ADMIN/*" element={ <MainPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
