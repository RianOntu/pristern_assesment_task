import React, { useState } from "react"
import Home from "./components/Home/Home"
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading,setIsLoading]=useState(false);
  console.log(isLoading);

  return (
    <>
    {/* {isLoading?<Loader/>:<Home isLoading={isLoading} setIsLoading={setIsLoading}/>} */}
      <Home isLoading={isLoading} setIsLoading={setIsLoading}/>
    
     
    
    </>
  )
}

export default App
