'use client';

import Weather from "@/componenets/Weather";


function App() {
  

  return (
    
    <div className="bg-black py-4 w-full  min-h-screen ">
    <div className='relative flex  text-5xl font-semibold justify-center w-full  text-white opacity-40'>
      Made by Bilal
      </div>
    <div>
      <Weather/>
    </div>
    </div>
    
  
  )
}

export default App
