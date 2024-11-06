import './App.css'
import Category from './components/Category'
import Home from './components/Home'
import Board from './components/Board'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import HowToPlay from './components/HowToPlay'

export const AppContext = createContext();

function App() {
  

  const [category, setCategory] = useState("Animal")

  return (
    <div className='md:px-[100px] lg:px-[150px] xl:px-[180px] 2xl:px-[300px]'>
    <AppContext.Provider value={{category, setCategory}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/board' element={<Board />} />
          <Route path='/howtoplay' element={<HowToPlay />} />
          
        </Routes>
      </Router>
    </AppContext.Provider>
    </div>
  )
}

export default App
