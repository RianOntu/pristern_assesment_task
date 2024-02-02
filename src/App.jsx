import React, { useState } from "react"
import Home from "./components/Home/Home"


function App() {
  const [isLoading,setIsLoading]=useState(false);
  console.log(isLoading);

  return (
    <>
   
      <Home isLoading={isLoading} setIsLoading={setIsLoading}/>
    
     
    
    </>
  )
}

export default App
