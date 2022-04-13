import React,{useState} from 'react';
import Card from "./Card";
import Button from './Button';
import classes from "./ErrorModal.module.css"

function ErrorModal(props) {
    const [error,setError]=useState(false);
    const toggle=()=>{
        setError(!error)
        console.log(`${error} from error modal`)
        props.handleError(error)

    }
    

  return (
      <div>
          <div className={classes.backdrop} />
    <Card className={classes.modal}>
        <div>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        </div>
        <div className={classes.content}>
            <p>{props.title}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={toggle}>Okay</Button>
        </footer>
     </Card>
     </div>
  )
}

export default ErrorModal