import React from 'react';

import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
// const [users, setUsers] = userState[
//   {name: 'Max', year:'31', id:'id1'}
// ]

// const addUserHandler = enteredText => {
//   setUsers(prevUsers => {
//     const updateUsers = [...prevUsers];
//     updateUsers.unshift({name: enteredText, })
//   });
// };

  return (
    <div className="App">
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
