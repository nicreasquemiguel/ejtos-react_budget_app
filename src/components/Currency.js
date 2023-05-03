
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const onChangeCurrencyHandler=(e)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value[0],
        });

    } 

    const currencyLabel = (curr)=> {
        switch(curr){
          case '$' :
            return '$ Dollar'
          case '£' :
            return '£ Pound'
          case '€' :
            return '€ Euro'
          case '₹' :
            return '₹ Ruppee'
          default:
            return ''
        }
    }
    
    return (
        <div className='alert alert-info input-group flex-nowrap'>
            <span className="input-group-text" id="addon-wrapping">Currency: </span>
            <select value={currencyLabel(currency)} onChange={onChangeCurrencyHandler} className="form-select col-auto" aria-label="currency" aria-describedby="addon-wrapping">
                <option>$ Dollar</option>
                <option>£ Pound</option>
                <option>€ Euro</option>
                <option>₹ Ruppee</option>
            </select>
      


        </div>
    );
};
export default Currency;