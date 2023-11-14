import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile companyName="Company Name" fName="Laura" lName=" Anderson" working="Web Design & Developer" 
             id="001" dob="01-01-2000" phone="000-111-222" email="abc@gmail.com" join="01-01-10" expire="01-01-12"/>
      
  
    </>
  )
}

export default App
