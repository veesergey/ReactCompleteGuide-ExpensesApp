import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  
    
  return (
    <div>
        {
            props.expenses.map( expense => {
            return <ExpenseItem
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
            ></ExpenseItem>;
            })
        }
    </div>   
  )
}
