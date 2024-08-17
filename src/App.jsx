import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Clients from './pages/Clients.jsx'
import Accounts from './pages/Accounts.jsx'
import Transactions from './pages/Transactions.jsx'
import Cards from './pages/Cards.jsx'
import Loans from './pages/Loans.jsx'
import MainLayout from './layouts/MainLayout.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path='/clients' element={<Clients />}></Route>
            <Route path='/accounts' element={<Accounts />}></Route>
            <Route path='/transactions' element={<Transactions />}></Route>
            <Route path='/cards' element={<Cards />}></Route>
            <Route path='/loans' element={<Loans />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </>
  )
}
export default App
