import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = function(props){

  const[isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(true);
  }
  const stopEditing = () => {
    setIsEditing(false);
  }
  const saveExpenseDataHandler= function(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  return <div className ="new-expense">
  {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
  {isEditing && (<ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />)}
  </div>
}

export default NewExpense;
