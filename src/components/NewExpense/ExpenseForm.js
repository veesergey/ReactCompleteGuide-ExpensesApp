import "./ExpenseForm.css";
import React, {useState } from 'react';


export default function ExpenseForm(){
    //States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    //Input Handlers - Title, Amount, Date
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
     
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
  
    return <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} placeHolder="Enter Title Here"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.00" step="0.01" onChange={amountChangeHandler} placeHolder="0.00"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                    </div>                  
                    </div>
                    <div className="new-expense__actions">
                            <button type="submit">Add Expense</button>
                    </div>
            </form>
}