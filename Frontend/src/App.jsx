import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/home/home'
import MyFlights from './components/my-flights/my-flights'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path=''  element={<Home/>} />
        <Route path='my-flights' element={<MyFlights/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
