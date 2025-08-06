import React, { useEffect, useState } from 'react'
import Card from '@mui/joy/Card';


function App() {

  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  }, [])

  return (
    <div>
        
    </div>
  )
}

export default App
