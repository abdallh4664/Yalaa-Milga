import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navi from './view/components/Navigation/Navi'
import Home from './view/pages/Screen1/Home'
import A from './view/pages/Screen2/A'

function App() {
    return (
        <div>
            <h1>layth</h1>
           <Navi />
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A" element={<A />} />
            </Routes> 
        </div>
    )
}
export default App