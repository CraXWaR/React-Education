const AddUser = (props) => {
  const addHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="button">Add User</button>
    </form>
  );
};

export default AddUser;
