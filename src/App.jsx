import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Layanan from './components/layanan/Layanan'
import { Menu } from './components/menu/Menu'

function App() {
  return <>
  <Header/>
  <Home/>
  <About/>
  <Layanan/>
  <Menu/>
  </>
}

export default App
