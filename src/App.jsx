import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const name = useRef();
  const email = useRef();
  const age = useRef();

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@gmail.com" },
    { id: 2, name: "Jake", age: 20, email: "jake@gmail.com" },
    { id: 3, name: "Jon", age: 28, email: "jon@gmail.com" },
    { id: 4, name: "Diana", age: 18, email: "diana@gmail.com" },
  ]);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => {
      return [
        ...prev,
        {
          name: name.current.value,
          email: email.current.value,
          age: age.current.value,
          id: uuidv4(),
        },
      ];
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className="form-wrapper">
          <label htmlFor="">Name:</label>
          <input type="text" ref={name} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Email:</label>
          <input type="email" ref={email} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Age:</label>
          <input type="number" ref={age} />
        </div>
        <button>Add User</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
