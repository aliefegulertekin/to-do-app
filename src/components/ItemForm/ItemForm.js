import React, {useState} from 'react';
import classes from './ItemForm.module.css';

const ItemForm = props => {

    const [planValue, setPlanValue] = useState('');
    const [dateValue, setDateValue] = useState();

    const planChangeHandler = (e) => {
        setPlanValue(e.target.value);
    }


    const dateChangeHandler = (e) => {

        setDateValue(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(planValue.length === 0 ||
            dateValue.length === 0) {
                return;
            }

        const newItem = {
            id: Math.random(),
            plan: planValue,
            date: dateValue
        }
        props.onAddItem(newItem);
        setPlanValue('');
        setDateValue('');
    }

    return (<form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['plan-section']}>
            <label className={classes.label}>Your Plan: </label>
            <input value={planValue} onChange={planChangeHandler} className={classes.input}/>
        </div>
        <div className={classes['date-section']}>
            <label className={classes.label}>Date: </label>
            <input type='date' value={dateValue} onChange={dateChangeHandler} className={classes.input}/>
        </div>
        <button type='submit'>Add</button>
    </form>)
}

export default ItemForm;