import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function IncomeList() {
const {IncomeTransactions} = useContext(GlobalContext);
const {deleteTransactions} = useContext(GlobalContext)
console.log(IncomeTransactions)
    return (
             <div  className="transactions  transactions-income">
            <h2> Transaction History </h2>
            <ul  className="transaction-list">

                {IncomeTransactions.map(IncomeTransactions => (
                    <li className="transaction" key={IncomeTransactions.id}>
<span className="transaction-text"> {IncomeTransactions.incometext} </span>

<span className="transaction-amount"> $ {IncomeTransactions.incomeamount} </span>
<button className="delete-btn"         onClick={() => deleteTransactions(IncomeTransactions.id)} > 
 <i className="fas fa-trash">  </i>  </button>
    </li>

))}

                </ul>
        </div>

    )
}

export default IncomeList
