import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from "../UI/Card"
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";

const AddUser=(props)=> {
   const [enteredUsername,setEnteredUsername]= useState('');
   const [enteredAge,setEnteredAge]=useState('');
   const [pop,setPop]=useState(false);
   const [errorMsg,setErrorMsg]=useState()

const errorHandler=(data)=>{
    setPop(data)
    console.log(`${pop} from error handler`)
}

    const formHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setPop(true)
            setErrorMsg({
                title:"Inavalid input",
                message:'please enter a valid name and age (non-empty values).'
            })
            return ;
           }
        if(+enteredAge<1){
         setPop(true)
         setErrorMsg({
            title:"Inavalid age",
            message:'please enter a valid age(>0).'
        })
        return ;
        }
        const details={
            username:enteredUsername,
            age:enteredAge,
            id:Math.random().toString()
        }
       props.handleUsers(details)
        setEnteredAge('')
        setEnteredUsername('')
    };
    const usernameChangeHandler=(e)=>{
        setEnteredUsername(e.target.value);
    }
    const ageChangeHandler=(e)=>{
        setEnteredAge(e.target.value)
    }
  return (
      <div>
          {pop && <ErrorModal title={errorMsg.title} message={errorMsg.message} handleError={errorHandler}/>}
      <Card className={classes.input} >
    <div>
        <form onSubmit={formHandler}>
        <label htmlFor='username'>username</label>
        <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUsername} />
        <label htmlFor='Age'>Age(in years)</label>
        <input id='Age' type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <Button type='submit'>add user</Button>
        </form>
    </div>
    </Card>
    </div>
  )
}

export default AddUser