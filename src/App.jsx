import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import Account from './pages/Account';
import NewAccount from './pages/NewAccount';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/NewTransaction';
import Cards from './pages/Cards';
import NewCard from './pages/NewCard';
import Loans from './pages/Loans';
import NewLoan from './pages/NewLoan';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/Account/:accountId' element={<Account />} />
            <Route path='/newAccount' element={<NewAccount />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/newTransaction' element={<NewTransaction />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/newCard' element={<NewCard />} />
            <Route path='/loans' element={<Loans />} />
            <Route path='/newLoan' element={<NewLoan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;