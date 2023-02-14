import React from 'react'
import './App.css'
import { Body } from './Components/Body'
import { CountContext,CountProvider } from './Components/Context/CountModal'
import { TemaProvider } from './Components/Context/TemaContext'
import { Header } from "./Components/Header"


function App() {
  return (
    <TemaProvider>
      <CountProvider>
          <Header/>
          <Body/>     
      </CountProvider>
    </TemaProvider>

  )
}

export default App
