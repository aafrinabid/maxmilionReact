import React from 'react'
import Card from "../UI/Card"
import classes from "./AddUser.module.css";

const AddUser=()=> {
    const formHandler=(event)=>{
        event.preventDefault();
    };
  return (
      <Card className={classes.input} >
    <div>
        <form onSubmit={formHandler}>
        <label htmlFor='username'>username</label>
        <input id='username' type="text" />
        <label htmlFor='Age'>Age(in years)</label>
        <input id='Age' type="number" />
        <button type='submit'>submit</button>
        </form>
    </div>
    </Card>
  )
}

export default AddUser