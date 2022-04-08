import React, {useEffect} from 'react';
import classes from './Item.module.css';

const Item = (props) => {


    const removeItemHandler = (e) => {
        e.preventDefault();
        props.onRemoveItem(e.target.id);
    }

    return (<li id={props.id} className={classes.item} onClick={removeItemHandler} >
        <span className={classes.index}>{props.index+1}</span>
        <span>{props.plan}</span>
        <span>{props.date}</span>
        
    </li>)
}

export default Item;