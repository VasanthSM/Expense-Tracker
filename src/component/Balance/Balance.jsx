import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
  return (
    <div className='BalanceHead'>
        <h3>Your Balance</h3>
        <h2>${total}</h2>
    </div>
  )
}

export default Balance;