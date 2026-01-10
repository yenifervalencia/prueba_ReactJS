
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Search } from './components/Search'
import { Articles } from './pages/Articles'
import { useState } from 'react'
import { useDebounce } from './hooks/useDeounce'
import { Background } from './components/Background'

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 300);
  return (
    <>
      <Header></Header>
      <div className='pt-[40px] overflow-hidden h-[100vh] '>
        <Background></Background>

        <div className='w-full p-4 flex justify-center font-bold text-4xl sm:text-6xl'>
          Lista de publicaciones
        </div>

        <div className='divider flex justify-center items-center mx-4 my-2'></div>
        <div className='px-4 md:px-[3.5rem] mb-1'>
          <Search searchText={searchText} setSearchText={setSearchText} ></Search>
        </div>

        <div className='flex justify-center'>
          <div className='overflow-auto h-[76vh] md:h-[69vh] px-4 md:px-11 py-4'>
            <Articles searchText={debouncedSearch}></Articles>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}


export default App
