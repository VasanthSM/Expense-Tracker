import {React, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  const { v4: uuidv4 } = require('uuid');
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text,
      amount: Number(amount)
    }
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="inputField">
          <label>Text</label>
          <input className='text' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter the value..." />
        </div>
        <div className="inputField">
          <label>Amount</label>
          <input className='number' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter the amount..." />
        </div>
        <button className="AddTransactionbtn">Add transaction</button>
      </form>
    </>
  )
}
export default AddTransaction;