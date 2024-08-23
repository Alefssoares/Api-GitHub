import {useState} from 'react'
import axios from 'axios'
import './App.css'

type githubData = {
  name: string 
  bio: string
  avatar_url: string
}

function App(){

 const [username, setUsername] = useState("")
 const [Name, setName] = useState("Loading...")
 const [bio, setbio] = useState("Loading...")
 const [avatar_url, setavatarURL] = useState("Loading...")
 const handlePesquisar = () => {
  axios.get<githubData>(`https://api.github.com/users/${username}`).
  then((response) => {setName(response.data.name)
  setbio(response.data.bio)
  setavatarURL(response.data.avatar_url)})
 }


  return (
   <div className="container-geral">
    <div className="container">
      <header className="header-top">
        Projeto EMIDES3AM
      </header >
      <main>
        <div className="form">
          <h1>
            Pesquisar GitHub
          </h1>
          <input type="text" placeholder="Digite o usuario" onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={handlePesquisar}>Consulta </button>
          
        </div>
        <div className="conteudo">
          <div>
            <img src={avatar_url} alt="" />
            <h1>{Name}</h1>
            
            <p>{bio}</p>
            </div>
          </div>
      </main>
    </div>
   </div>
   
    
  )
}

export default App
