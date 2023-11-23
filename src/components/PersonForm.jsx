function PersonForm({addPerson}) {
    return ( <div>
        <h1>Add/Edit person</h1>
        <form>
    <label htmlFor="id">Id</label>
    <input id="id" type="number" readOnly placeholder="id" />
    <label htmlFor="name">Name</label>
    <input id="name" type="text" placeholder="name" />
    <label htmlFor="age">Age</label>
    <input id="age" type="number" min="1" max="120" placeholder="age" />
    <label htmlFor="email">Email</label>
    <input id="email" type="email" placeholder="email" />
    <label htmlFor="gender">Gender</label>
    <select id="gender">
        <option defaultChecked>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
    <button>Update</button>
    <button onClick={() => addPerson()}>Add</button>

</form>
    </div> );
}

export default PersonForm;