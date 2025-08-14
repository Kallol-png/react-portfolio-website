
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='min-h-screen bg-black text-white overflow-hidden'>
        <Navbar/>
        <main className='my-4'>
          <Outlet/>
          
        </main>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
