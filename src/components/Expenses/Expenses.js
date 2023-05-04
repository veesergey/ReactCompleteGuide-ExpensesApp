import React, {useState} from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }



  return (
    <div>
      
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {
              
              props.items.map( expense => {
              return <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  date={expense.date}
                  amount={expense.amount}
              ></ExpenseItem>;
              })
          }
      </Card>   
    </div>
  )
}
