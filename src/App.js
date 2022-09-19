import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/ui/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExspense from "./components/NewExpense/NewExspense";

const DummyExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
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


const App = () => {

    const [expenses,setExpenses] = useState(DummyExpenses);

    const addExpenseHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState]
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <NewExspense onAddExpense={addExpenseHandler} />
                <Expenses items={expenses} />
            </header>
        </div>
    );
}

export default App;
