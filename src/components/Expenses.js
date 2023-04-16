import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";

export default function Expenses(props) {
  return (
    <Card className='expenses'>
        {
            props.expenses.map( expense => {
            return <ExpenseItem
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
            ></ExpenseItem>;
            })
        }
    </Card>   
  )
}
