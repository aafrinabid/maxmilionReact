import React from 'react'
import Card from "../UI/Card"
import classes from './UsersLists.module.css'

function Userslists(props) {
  return (
      <Card className={classes.users}>
    <ul>
        {props.users.map((user)=>(
            <li key={user.id}>
                {user.username} ({user.age} years old)
            </li>
  ))}
    </ul>
    </Card>
  )
}

export default Userslists