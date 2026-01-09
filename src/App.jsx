
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Search } from './components/Search'
import { Articles } from './pages/Articles'
import { useState } from 'react'

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Header></Header>
      <div className='pt-[40px] overflow-hidden h-[100vh] '>
        <div className='w-full flex justify-between p-4'>
          <div className='w-full font-bold text-2xl'>
            Lista de publicaciones
          </div>
          <Search searchText={searchText} setSearchText={setSearchText} ></Search>
        </div>
        
        <div className='divider flex justify-center items-center mx-4 my-2 w-fuññ'></div>
        <div className='overflow-auto h-[75vh]'>
          <Articles searchText={searchText}></Articles>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}


export default App
