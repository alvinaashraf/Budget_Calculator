import React , { createContext ,  useReducer} from 'react'
import AppReducer from './AppReducer'

const InitialState ={
IncomeTransactions:[

    {id : 1 , incometext:"salary" , incomeamount:500 },
    {id : 2 , incometext:"salabusonery" , incomeamount:500 },

],
ExpenseTransactions:[
    {id : 1 , expensetext:"house" , expenseamount:500 }

]




};

export const GlobalContext = createContext(InitialState);

export const GlobalContextProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer , InitialState)
const addIncome = IncomeTransactions => {
    dispatch({
        type: "ADD_INCOME",
        payload: IncomeTransactions
      });
}

const addExpense = ExpenseTransactions => {
    dispatch({
        type: "ADD_EXPENSE",
        payload: ExpenseTransactions
      });
}

const deleteTransactions = (id) =>{
dispatch({
    type:"DELETE_TRANSACTION",
    payload: id
})
}

return(

        <GlobalContext.Provider  value={{
            IncomeTransactions:state.IncomeTransactions,
            ExpenseTransactions:state.ExpenseTransactions,
            addIncome,
            addExpense,
            deleteTransactions


        }}> 
{children}
            </GlobalContext.Provider>
    )
}