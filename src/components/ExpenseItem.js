import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";



function ExpenseItem(props) {

  return <div className="expense-item">
    <ExpenseDate date={props.date} title={props.title} amount={props.amount} />
    <div className="expense-item__description">
    <h2> {props.title}</h2>
    <div className="expense-item__price"> ${props.amount} </div>
    </div>
    </div>
}

export default ExpenseItem;
