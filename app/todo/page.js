'use client';
import { useState } from 'react'
function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])

  function handlesave() {
    
    if (!Todo) {
      return
    }
    if (Todos.includes(Todo)) {
       setTodo("")
      return
    }
    setTodos([...Todos ,Todo])
    setTodo("")
    console.log(Todos)
     
   
    
  }
    function handledelete(value) {
   
     
      console.log(value)
     const updateTodos= Todos.filter((curTodos)=> curTodos !== value)
     setTodos(updateTodos);
     
      
    }
    function handleedit(value) {
     
    
      
       setTodo(value)

     handledelete(value)
    


      
    }

  return (
    <>
     <div className='text-4xl flex justify-center items-center p-2 font-bold text-white'>
      Todo-list
    </div>
     {/* <Navbar/> */}
     <div className=' bg-gray-600 h-100'>
     <div className='p-5 flex flex-col m-5   justify-center items-center'>
      
        <div className='flex gap-2'> 
        <div >
      <input value={Todo} onChange={(e)=>{setTodo(e.target.value)}} className='rounded text-black bg-white p-1 w-full' type="text" />
      </div>
      <button onClick={handlesave} className='bg-red-500 p-1 text-sm rounded text-white font-bold hover:bg-red-400 cursor-pointer'>
        save
        </button>
        </div>
          <div>
    <ul>
      {Todos.map((curTodos,index)=>{
        return <li key={index}  className='w-full mt-5 flex justify-between py-2 rounded mr-5 text-white font-bold px-5 bg-gray-400'><span>{curTodos}</span>
        <div className='flex gap-2' >
        <button onClick={()=>handledelete(curTodos)} className='bg-red-500 p-1 text-sm rounded text-white font-bold hover:bg-red-400 cursor-pointer'>delete</button>
        <button onClick={()=>handleedit(curTodos)} className='bg-red-500 p-1 text-sm rounded text-white font-bold hover:bg-red-400 cursor-pointer'>edit</button>
        </div>
        </li>
      })}
     
    </ul>
    
    </div>
     <button onClick={()=>{setTodos([])}} className='bg-red-500 p-1 mt-5 text-sm rounded text-white font-bold hover:bg-red-400 cursor-pointer'>Clear all</button>
     </div>
   </div>
    </>
  )
}

export default App
