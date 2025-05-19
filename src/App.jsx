
import SS from './components/SS.jsx'
import Counter  from './components/Counter.jsx'
import SecretMessage from './components/SecretMessage.jsx'
import Mirror from './components/Mirror.jsx'

import './App.css'


function App() {

  return (

      <div>
        <h1>My first React App</h1>
        <SS name="John" time="morning" />
        <Counter/>
        <SecretMessage/>
        <Mirror/>
      </div>

  )
}

export default App
