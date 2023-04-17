import ExpenseForm from "./ExpenseForm";
import "../NewExpense/NewExpense.css";
import "./ExpenseForm.css"

const NewExpense = () => {
    return  <div className="new-expense">
                <ExpenseForm />
            </div>
    
}

export default NewExpense;