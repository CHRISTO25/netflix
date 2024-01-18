import React from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { Actions,Netflix_orginal ,Documentry,Romance} from './url'


function App() {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <RowPost title='Netflix Orginals' url={Netflix_orginal}/>
       <RowPost title='Action' small url={Actions}/>
       <RowPost title='Romance'small url={Romance}/>
       <RowPost title='Documentaries' small url={Documentry}/>
    </div>
  )
}

export default App
 