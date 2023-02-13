import React from 'react'
import './App.css'
import { Body } from './Components/Body'
import { CountContext,CountProvider } from './Components/Context/CountModal'
import { Header } from "./Components/Header"


function App() {
  return (
    <CountProvider>
        <Header/>

        <Body/>
      
    </CountProvider>

  )
}

export default App
