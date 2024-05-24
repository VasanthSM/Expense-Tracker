const appReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      const newState = {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
      localStorage.setItem('transactions', JSON.stringify(newState.transactions));
      return newState;
    case 'DELETE_TRANSACTION':
      const updatedState = {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
      localStorage.setItem('transactions', JSON.stringify(updatedState.transactions));
      return updatedState;
    default:
      return state;
  }
};
export default appReducer;