export default (state , action) => {
switch(action.type) {
   case 'ADD_INCOME':
       return {
           ...state,
           IncomeTransactions: [action.payload , ...state.IncomeTransactions]
       };
       case  'ADD_EXPENSE':
       return {
           ...state,
           ExpenseTransactions: [action.payload , ...state.ExpenseTransactions]
       }
   case 'DELETE_TRANSACTION':
       return{
           ...state,
           IncomeTransactions: state.IncomeTransactions.filter(
               IncomeTransactions => IncomeTransactions.id !== action.payload 
           ),
           ExpenseTransactions: state.ExpenseTransactions.filter(
            ExpenseTransactions => ExpenseTransactions.id !== action.payload 
        ),
   
       }
   
   
   
    default : return state 
}
}