import React,{useContext} from 'react'
import {GlobalContext } from '../context/GlobalState'

function Balance() {
    const {IncomeTransactions , ExpenseTransactions} = useContext(GlobalContext)
const IncomeAmount = IncomeTransactions.map(
    IncomeTransaction => IncomeTransaction.incomeamount
)
const ExpenseAmount = ExpenseTransactions.map(
    ExpenseTransactions => ExpenseTransactions.expenseamount
)

const totalIncome = IncomeAmount
.reduce((acc, item) => (acc += item), 0)
.toFixed(2);
const TotalExpense =  ExpenseAmount.reduce((acc, item ) => (acc +=item) , 0 ).toFixed(2)

    return (
        <div className="balance">
            <h2> Your Balance  </h2>

    <h3> $ {totalIncome -TotalExpense }</h3>

            <div className="income-expense">  
<div className="plus">   <h3> Income </h3> <p> $ {totalIncome} </p>   </div>

<div className="minus">   <h3> Expenses </h3> <p> -$ {TotalExpense} </p>   </div>

                </div>
        </div>
    )
}

export default Balance
