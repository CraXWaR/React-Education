import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        {
          name: userName,
          age: userAge,
          id: Math.floor(Math.random() * 100).toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAdd={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
