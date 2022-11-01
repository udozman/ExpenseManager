import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";

import "./App.css";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses, setExpenses] = useState(dummyExpenses);

   const addExpenseHandler = (expenses) =>{
     setExpenses((prevExpenses) => {
       return [expenses, ...prevExpenses];
     })
     console.log(expenses);
   }

const[filteredYear, setFilteredYear] = useState("2020");

const filterChangeHandler = (selectedYear) =>{
  console.log(selectedYear);
  setFilteredYear(selectedYear);
}

  const filteredExpenses = expenses.filter((expense) =>{return expense.date.getFullYear().toString()===filteredYear})

  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {filteredExpenses.length ===0? <h2 className="heading">No expenses for this year.</h2> :
       filteredExpenses.map((expense) =><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
      }

    </div>

  );
}

export default App;
