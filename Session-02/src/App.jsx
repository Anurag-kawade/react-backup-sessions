import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)

  function inc(){
    setNum(num+1)
  }
  
  return (
    <div className="flex flex-col items-center justify-center text-3xl p-8">
      <h2>{num}</h2>
      <button onClick={inc} className="bg-green-700 py-1 px-2  rounded-2xl m-4 active:scale-95">Increment</button>
    </div>
  )
}

export default App