import React, {useState} from "react";
import Item from "./Item";
import classes from './ItemList.module.css';

const ItemList = (props) => {


    return (
        <ul className={classes['item-list']}>
            {props.items.map((item, index) =>
                <Item
                onRemoveItem ={props.onRemoveItem}
                key={item.id}
                id={item.id}
                index ={index}
                plan = {item.plan}
                date = {item.date}
                />
                )
                }
        </ul>
    )
}

export default ItemList;