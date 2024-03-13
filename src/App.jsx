import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetData from './peticiones/GetData'
import PostData from './peticiones/PostData'
import FindById from './peticiones/FindById'


function App() {


  return (
<div className="container justify-content-center">
    <PostData/>
    <GetData/>
    <FindById/>
    </div>
  )
}

export default App
