import React, { useState, useEffect } from 'react'
import './styles/App.css'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import { fetchData } from './util/persistence'


const blankPerson = {id: "", age: "", name: "", email: "", gender: ""};


function App() {

  const [persons, setPersons] = useState([]);
  const [personToEdit, setPersonToEdit] = useState([blankPerson]);
  const APIURL = 'http://localhost:3000/api'

  function editPerson(person) {

    setPersonToEdit(person)
    
  }

  function mutatePerson(person) {
    if (person.id != "")
    {
      //put
      updatePerson(person);
    } else {
      //post
      createPerson(person);
    }
  }

  function updatePerson(person)
  {
    console.log("updatePerson");
    fetchData(`${APIURL}/${person.id}`,
    person => {
     setPersons(
      persons.map((p => p.id === person.id ? {...person} : p))
     );
  },
      'PUT',
       person
    );
  }

  function createPerson(person)
  {
    fetchData(`${APIURL}`,
     (person) => setPersons([...persons, person]), 
     "POST",
      person);
  }
  
  

  function getPersons(callback) {
    fetchData(APIURL, callback)
  }

  function deletePersonById(personId)
  {

    //fjern fra API - JSON-server
    fetchData(`${APIURL}/${personId}`, () =>{}, "DELETE");
    //fjern fra persons state
    setPersons([...persons.filter((p) => p.id !== personId)]);


  }

  

  useEffect(() => {
    getPersons((data) => {
      setPersons(data)
    })
  }, []);

  
  

  return (
    <div>
      <h1>Person DB</h1>
      <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}  />
      
      
      <PersonList persons={persons} 
      deletePersonById={deletePersonById} 
      editPerson={editPerson}/>
      


    </div>
  )
}

export default App
