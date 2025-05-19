import React from 'react'
import { useState } from 'react'
function SecretMessage() {
const [ isVisable , setVisabillty]  = useState(false);

  return (
      <div>
        <h3>{isVisable}</h3>
         {isVisable && <p>This element is visible.</p>}
         <button onClick={() => setVisabillty(true)}>Show</button>
         <button onClick={() => setVisabillty(false)}>Hide</button>
      </div>
  )
}

export default SecretMessage
