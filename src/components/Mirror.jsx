import { useState } from 'react'
function Mirror() {
const [ Mirror , setMirror]  = useState(false);

  return (
      <div>
        <h3>{Mirror}</h3>
         <input type='text'  onChange={(e) => setMirror(e.target.value)} ></input>
      </div>
  )
}

export default Mirror
