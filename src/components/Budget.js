
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const MAX_BUDGET = 20000;

const Budget = () => {
    const { budget, expenses, remaining, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {return (total += item.cost);}, 0);
    
    const onChangeBudgetHandler = (event) => {

        let value = Number(event.target.value);
        if (Number.isNaN(value) && !Number.isInteger(value)){
            alert("Enter valid number/integer");
            return;
        }
        
        if(totalExpenses > MAX_BUDGET){
            alert("The budget can't exceed remaining funds " + currency + remaining)

            value=totalExpenses;
        }
        if(value < totalExpenses){
            alert("The budget can't lower budget over spent so far " + currency + totalExpenses)
            value=totalExpenses;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary input-group flex-nowrap'>
            <span className="input-group-text">Budget: {currency}</span>
            <input type="number" value={budget} name="budget" min={totalExpenses} max={MAX_BUDGET} step="10" onChange={onChangeBudgetHandler} className="form-control"/>
        </div>
    );
};
export default Budget;