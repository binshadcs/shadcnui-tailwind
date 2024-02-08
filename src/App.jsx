import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/home'
import { ThemeProvider } from "@/components/ThemeProvider"


function App() {
  return (
      <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Home />
      </ThemeProvider>
      </>
  )
}

export default App
