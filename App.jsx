import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'



const api = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {

  const [users, setUsers] = useState([])
  const [newName, setNewName] = useState('')
  const [age, setAge] = useState('')


  useEffect(() => {
    api.get('/usuarios').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])

  function newUser() {
    api.post('/usuarios', {
      age,
      newName,
    })
    .then((response) => {
      console.log(response)
    })
  }


  return (
    <div>
<h1 className=' bg-slate-500'>Lista de Usuários</h1>
      <ul >
       
        {users.map((user) => (
          <li  key={user.newName}>
            Nome: {user.newName} - Idade: {user.age}
          </li>
        ))}

      </ul>

     <form action="">
      <input placeholder='Nome'
        onChange={(event) => setNewName(event.target.value)}
      />
      <input placeholder='Idade'
        onChange={(novoEvent) => setAge(novoEvent.target.value)}
      />
      <button onClick={newUser}>Adicionar Usuário</button>
      </form>
    </div>

  )
}

export default App
