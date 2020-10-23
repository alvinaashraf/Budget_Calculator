import React from 'react'

function ExpenseTransaction({ExpenseTransaction}) {
    return (
        <li className="transaction">
        <span className="transaction-text"> {ExpenseTransaction.expensetext} </span>
        
        <span className="transaction-amount"> $ {ExpenseTransaction.expenseamount} </span>
        <button className="delete-btn">  <i className="fas fa-trash">  </i>  </button>
            </li>
          )
}

export default ExpenseTransaction
