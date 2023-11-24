import { useState } from "react";

function PersonForm({ blankPerson }) {
  const [person, setPerson] = useState({});

  return (
    <div>
      <h1>Add/Edit person</h1>
      <form>
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="number"
          readOnly
          placeholder="id"
          value={person.id}
        />
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="name" value={person.name} />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          min="1"
          max="120"
          placeholder="age"
          value={person.age}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={person.email}
        />
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={person.gender}>
          <option defaultChecked>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button>Update</button>
        <button onClick={() => setPerson(blankPerson)}>Reset</button>
      </form>
    </div>
  );
}

export default PersonForm;
