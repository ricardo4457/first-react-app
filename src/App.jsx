
import SS from './components/SS.jsx'
import Counter  from './components/Counter.jsx'
import SecretMessage from './components/SecretMessage.jsx'
import Mirror from './components/Mirror.jsx'
import EstudanteList from './components/Estudante/EstudanteList.jsx'
import './App.css'


function App() {
const estudantes = [
  { nome: "Vitor", nota1: 18, nota2: 17, nota3: 17.5 },
  { nome: "Ana", nota1: 10, nota2: 9, nota3: 8.9 }
];

  return (

      <div>
        <h1>My first React App</h1>
        <EstudanteList students={estudantes} />
        {/* <SS name="John" time="morning" />
        <Counter/>
        <SecretMessage/>
        <Mirror/> */}
        
      </div>

  )
}

export default App
