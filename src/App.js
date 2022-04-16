import React,{useState} from 'react';
import AddUser from './Components/user/AddUser';
import Userslists from './Components/user/Userslists';


// }
function App() {
  const [users,setusers]=useState([])
const handleUsers=(data)=>{
  setusers((prevState)=>{
    return [...prevState,data]
  })
}
  
  return (
    <div className="App">
      <AddUser handleUsers={handleUsers} />
      <Userslists users={users} />
    </div>
  );
}

export default App;
