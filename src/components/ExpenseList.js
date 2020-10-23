import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function ExpenseList() {
const {ExpenseTransactions} = useContext(GlobalContext);
const {deleteTransactions} = useContext(GlobalContext)

console.log(ExpenseTransactions)
    return (
             <div  className="transactions  transactions-expense">
            <h2> Transaction History </h2>
            <ul  className="transaction-list">

                {ExpenseTransactions.map(ExpenseTransactions => (
                    <li className="transaction" key={ExpenseTransactions.id}>
<span className="transaction-text"> {ExpenseTransactions.expensetext} </span>

<span className="transaction-amount"> $ {ExpenseTransactions.expenseamount} </span>
<button className="delete-btn"  onClick={() => deleteTransactions(ExpenseTransactions.id)}>  <i className="fas fa-trash">  </i>  </button>
    </li>

))}

                </ul>
        </div>

    )
}

export default ExpenseList
