import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const saveDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.floor(Math.random() * 100)
        };
        props.onAdd(data);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveDataHandler}/>
        </div>
    );
}

export default NewExpense;