import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState/GlobalState';
import { TiDelete } from "react-icons/ti";

const Transactions = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  const sign = amount => amount > 0 ? '+' : '-';

  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{sign(transaction.amount)}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
            <TiDelete className='delete-btnicon'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;