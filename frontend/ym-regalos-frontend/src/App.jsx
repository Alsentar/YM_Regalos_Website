
import { Outlet } from 'react-router'
import Header from './components/layout/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App