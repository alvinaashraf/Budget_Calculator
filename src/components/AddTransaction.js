import React ,{useState , useContext} from 'react'
import { v4 as uuidv4 } from "uuid";
import {GlobalContext} from '../context/GlobalState'

function AddTransaction() {
const {addIncome , addExpense} = useContext(GlobalContext)
    const [income , setincome] = useState({
        incometext:"",
        incomeamount:0
    });

    const onChangeIncome = e => {
        setincome({ ...income, [e.target.name]: e.target.value });
    }

    const onSubmitIncome = e =>{
        e.preventDefault();
const newTransactions ={ id : uuidv4(),
incometext:income.incometext,
incomeamount:income.incomeamount

};
addIncome(newTransactions)
console.log(newTransactions)
    }

    const [expense, setExpense] = useState({
        expensetext: "",
        expenseamount: 0,
      });
    
      const { expensetext, expenseamount } = expense;
    
      const onChangeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
      };
    
      const onSubmitExpense = (e) => {
        e.preventDefault();
    
        if (expensetext !== "") {
          const newExpenseTransaction = {
            id: uuidv4(),
            expensetext,
            expenseamount: expenseamount * 1,
          };
    
          addExpense(newExpenseTransaction);
    
          setExpense({
            expensetext: "",
            expenseamount: 0,
          });
        }
      };
    
    return (
        <div className="form-wrapper">
            <form  onSubmit={onSubmitIncome}>  
<div  className="input-group income"> 
<input type="text" name="incometext" placeholder="income" autoComplete="off" onChange={onChangeIncome}/>

<input type="number" placeholder="amount" name="incomeamount" autoComplete="off" onChange={onChangeIncome} />

<input type="submit" value="submit "/>
    </div>

                </form>


                <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expensetext"
            value={expensetext}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseamount"
            value={expenseamount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>

        </div>
    )
}

export default AddTransaction
