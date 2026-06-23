
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Layout/Nav'
import Home from './Pages/Home';
import Saved from './Pages/Saved';

const App = () => {

  return (
    <>
    <Nav/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/saved' element={<Saved/>} />
    </Routes>
    {/* <Home/> */}
    </>
  )
}

export default App
