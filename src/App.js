import './App.css';
import AddTransaction from './component/AddTransaction/AddTransaction';
import Balance from './component/Balance/Balance';
import Header from './component/Header/Header';
import IncomeExpenses from './component/IncomeExpenses/IncomeExpenses';
import TransactionList from './component/TransactionList/TransactionList';
import { GlobalProvider } from './context/GlobalState/GlobalState';


function App() { 
  return (
  <section className='WholeSection'>
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  </section>

  )
}

export default App;